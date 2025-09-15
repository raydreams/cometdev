"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { createBlog, updateBlog, deleteBlog } from "@/app/actions/blog-actions"
import { getAllBlogPosts, type BlogPost } from "@/lib/blog-store"

interface BlogEditorProps {
  onLogout: () => void
}

export function BlogEditor({ onLogout }: BlogEditorProps) {
  const [blogs, setBlogs] = useState<BlogPost[]>([])
  const [editingBlog, setEditingBlog] = useState<BlogPost | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [dragActive, setDragActive] = useState(false)
  const [message, setMessage] = useState("")
  const fileInputRef = useRef<HTMLInputElement>(null)

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    minecraftSkin: "",
    headerImage: "",
    content: "",
  })

  // Load blogs on component mount
  useEffect(() => {
    setBlogs(getAllBlogPosts())
  }, [])

  const refreshBlogs = () => {
    setBlogs(getAllBlogPosts())
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage("")

    const data = new FormData()
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value)
    })

    try {
      let result
      if (editingBlog) {
        data.append("id", editingBlog.id)
        result = await updateBlog(data)
      } else {
        result = await createBlog(data)
      }

      if (result.success) {
        refreshBlogs()
        setFormData({
          title: "",
          author: "",
          minecraftSkin: "",
          headerImage: "",
          content: "",
        })
        setEditingBlog(null)
        setMessage(editingBlog ? "Blog post updated successfully!" : "Blog post created successfully!")

        // Clear message after 3 seconds
        setTimeout(() => setMessage(""), 3000)
      } else {
        setMessage(result.error || "Failed to save blog post")
      }
    } catch (error) {
      console.error("Error saving blog:", error)
      setMessage("Failed to save blog post")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleEdit = (blog: BlogPost) => {
    setEditingBlog(blog)
    setFormData({
      title: blog.title,
      author: blog.author,
      minecraftSkin: blog.minecraftSkin,
      headerImage: blog.headerImage,
      content: blog.content,
    })
    setMessage("")
  }

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this blog post?")) {
      const result = await deleteBlog(id)
      if (result.success) {
        refreshBlogs()
        setMessage("Blog post deleted successfully!")
        setTimeout(() => setMessage(""), 3000)
      } else {
        setMessage(result.error || "Failed to delete blog post")
      }
    }
  }

  const handleCancel = () => {
    setEditingBlog(null)
    setFormData({
      title: "",
      author: "",
      minecraftSkin: "",
      headerImage: "",
      content: "",
    })
    setMessage("")
  }

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0]
      const imageUrl = `/placeholder.svg?height=400&width=800&query=${encodeURIComponent(file.name)}`
      setFormData((prev) => ({ ...prev, headerImage: imageUrl }))
    }
  }

  const insertMarkdown = (syntax: string) => {
    const textarea = document.getElementById("content") as HTMLTextAreaElement
    if (!textarea) return

    const start = textarea.selectionStart
    const end = textarea.selectionEnd
    const selectedText = textarea.value.substring(start, end)

    let newText = ""
    switch (syntax) {
      case "bold":
        newText = `**${selectedText || "bold text"}**`
        break
      case "italic":
        newText = `*${selectedText || "italic text"}*`
        break
      case "heading":
        newText = `## ${selectedText || "Heading"}`
        break
      case "link":
        newText = `[${selectedText || "link text"}](url)`
        break
      case "code":
        newText = `\`${selectedText || "code"}\``
        break
      case "list":
        newText = `- ${selectedText || "list item"}`
        break
    }

    const newContent = textarea.value.substring(0, start) + newText + textarea.value.substring(end)
    setFormData((prev) => ({ ...prev, content: newContent }))

    // Focus back to textarea
    setTimeout(() => {
      textarea.focus()
      textarea.setSelectionRange(start + newText.length, start + newText.length)
    }, 0)
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <span className="text-black font-bold text-lg">C</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold">Blog Admin</h1>
              <p className="text-gray-400">Manage Comet Client blog posts</p>
            </div>
          </div>
          <Button
            onClick={onLogout}
            variant="outline"
            className="border-white/20 text-white hover:bg-white/5 rounded-full bg-transparent"
          >
            Logout
          </Button>
        </div>

        {/* Success/Error Message */}
        {message && (
          <div
            className={`mb-6 p-4 rounded-2xl ${
              message.includes("success")
                ? "bg-green-500/10 border border-green-500/20 text-green-400"
                : "bg-red-500/10 border border-red-500/20 text-red-400"
            }`}
          >
            {message}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Editor */}
          <div className="space-y-6">
            <div className="p-6 rounded-3xl bg-white/5 border border-white/10">
              <h2 className="text-xl font-bold mb-6">{editingBlog ? "Edit Blog Post" : "Create New Blog Post"}</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Header Image */}
                <div>
                  <label className="block text-sm font-medium mb-2">Header Image</label>
                  <div
                    className={`border-2 border-dashed rounded-2xl p-6 text-center transition-colors ${
                      dragActive ? "border-white/40 bg-white/5" : "border-white/20"
                    }`}
                    onDragEnter={handleDrag}
                    onDragLeave={handleDrag}
                    onDragOver={handleDrag}
                    onDrop={handleDrop}
                  >
                    {formData.headerImage ? (
                      <div className="space-y-4">
                        <img
                          src={formData.headerImage || "/placeholder.svg"}
                          alt="Header preview"
                          className="w-full h-32 object-cover rounded-xl"
                        />
                        <Button
                          type="button"
                          onClick={() => setFormData((prev) => ({ ...prev, headerImage: "" }))}
                          variant="outline"
                          className="border-white/20 text-white hover:bg-white/5 rounded-full bg-transparent"
                        >
                          Remove Image
                        </Button>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <div className="text-4xl">📷</div>
                        <div>
                          <p className="text-gray-300 mb-2">Drag & drop an image or</p>
                          <Button
                            type="button"
                            onClick={() => fileInputRef.current?.click()}
                            className="bg-white/10 hover:bg-white/20 rounded-full"
                          >
                            Browse Files
                          </Button>
                        </div>
                        <Input
                          placeholder="Or paste image URL"
                          value={formData.headerImage}
                          onChange={(e) => setFormData((prev) => ({ ...prev, headerImage: e.target.value }))}
                          className="bg-white/5 border-white/20 rounded-2xl text-white placeholder:text-gray-400"
                        />
                      </div>
                    )}
                  </div>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      if (e.target.files?.[0]) {
                        const file = e.target.files[0]
                        const imageUrl = `/placeholder.svg?height=400&width=800&query=${encodeURIComponent(file.name)}`
                        setFormData((prev) => ({ ...prev, headerImage: imageUrl }))
                      }
                    }}
                  />
                </div>

                {/* Title, Author, Minecraft Skin */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="title" className="block text-sm font-medium mb-2">
                      Title *
                    </label>
                    <Input
                      id="title"
                      value={formData.title}
                      onChange={(e) => setFormData((prev) => ({ ...prev, title: e.target.value }))}
                      required
                      className="bg-white/5 border-white/20 rounded-2xl text-white placeholder:text-gray-400"
                      placeholder="Blog post title"
                    />
                  </div>
                  <div>
                    <label htmlFor="author" className="block text-sm font-medium mb-2">
                      Author *
                    </label>
                    <Input
                      id="author"
                      value={formData.author}
                      onChange={(e) => setFormData((prev) => ({ ...prev, author: e.target.value }))}
                      required
                      className="bg-white/5 border-white/20 rounded-2xl text-white placeholder:text-gray-400"
                      placeholder="Author name"
                    />
                  </div>
                  <div>
                    <label htmlFor="minecraftSkin" className="block text-sm font-medium mb-2">
                      Minecraft Skin
                    </label>
                    <Input
                      id="minecraftSkin"
                      value={formData.minecraftSkin}
                      onChange={(e) => setFormData((prev) => ({ ...prev, minecraftSkin: e.target.value }))}
                      className="bg-white/5 border-white/20 rounded-2xl text-white placeholder:text-gray-400"
                      placeholder="Username"
                    />
                  </div>
                </div>

                {/* Markdown Editor */}
                <div>
                  <label htmlFor="content" className="block text-sm font-medium mb-2">
                    Content *
                  </label>

                  {/* Markdown Buttons */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {[
                      { label: "Bold", action: "bold" },
                      { label: "Italic", action: "italic" },
                      { label: "Heading", action: "heading" },
                      { label: "Link", action: "link" },
                      { label: "Code", action: "code" },
                      { label: "List", action: "list" },
                    ].map((btn) => (
                      <Button
                        key={btn.action}
                        type="button"
                        onClick={() => insertMarkdown(btn.action)}
                        className="bg-white/10 hover:bg-white/20 rounded-full text-xs px-3 py-1"
                      >
                        {btn.label}
                      </Button>
                    ))}
                  </div>

                  <Textarea
                    id="content"
                    value={formData.content}
                    onChange={(e) => setFormData((prev) => ({ ...prev, content: e.target.value }))}
                    required
                    rows={12}
                    className="bg-white/5 border-white/20 rounded-2xl text-white placeholder:text-gray-400 resize-none font-mono"
                    placeholder="Write your blog post content in Markdown..."
                  />
                </div>

                <div className="flex gap-4">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-white text-black hover:bg-gray-200 rounded-full px-8 font-semibold"
                  >
                    {isSubmitting ? "Saving..." : editingBlog ? "Update Post" : "Create Post"}
                  </Button>
                  {editingBlog && (
                    <Button
                      type="button"
                      onClick={handleCancel}
                      variant="outline"
                      className="border-white/20 text-white hover:bg-white/5 rounded-full bg-transparent"
                    >
                      Cancel
                    </Button>
                  )}
                </div>
              </form>
            </div>
          </div>

          {/* Blog List */}
          <div className="space-y-6">
            <div className="p-6 rounded-3xl bg-white/5 border border-white/10">
              <h2 className="text-xl font-bold mb-6">Published Posts ({blogs.length})</h2>

              <div className="space-y-4 max-h-96 overflow-y-auto">
                {blogs.length === 0 ? (
                  <p className="text-gray-400 text-center py-8">No blog posts yet. Create your first post!</p>
                ) : (
                  blogs.map((blog) => (
                    <div key={blog.id} className="p-4 rounded-2xl bg-white/5 border border-white/10">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="font-semibold mb-1">{blog.title}</h3>
                          <p className="text-sm text-gray-400 mb-2">
                            By {blog.author} • {blog.createdAt.toLocaleDateString()}
                          </p>
                          <p className="text-xs text-gray-500 line-clamp-2">
                            {blog.content.replace(/[#*`]/g, "").substring(0, 100)}...
                          </p>
                        </div>
                        <div className="flex gap-2 ml-4">
                          <Button
                            onClick={() => handleEdit(blog)}
                            className="bg-white/10 hover:bg-white/20 rounded-full text-xs px-3 py-1"
                          >
                            Edit
                          </Button>
                          <Button
                            onClick={() => handleDelete(blog.id)}
                            className="bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-full text-xs px-3 py-1"
                          >
                            Delete
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
