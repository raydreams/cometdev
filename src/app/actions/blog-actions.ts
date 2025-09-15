"use server"

import { createBlogPost, updateBlogPost, deleteBlogPost } from "@/lib/blog-store"
import { revalidatePath } from "next/cache"

export async function createBlog(formData: FormData) {
  const title = formData.get("title") as string
  const author = formData.get("author") as string
  const minecraftSkin = formData.get("minecraftSkin") as string
  const headerImage = formData.get("headerImage") as string
  const content = formData.get("content") as string

  if (!title || !author || !content) {
    return { success: false, error: "Missing required fields" }
  }

  try {
    const post = createBlogPost({
      title,
      author,
      minecraftSkin,
      headerImage: headerImage || "/placeholder.svg?height=400&width=800",
      content,
    })

    revalidatePath("/blog")
    revalidatePath("/")

    return { success: true, post }
  } catch (error) {
    return { success: false, error: "Failed to create blog post" }
  }
}

export async function updateBlog(formData: FormData) {
  const id = formData.get("id") as string
  const title = formData.get("title") as string
  const author = formData.get("author") as string
  const minecraftSkin = formData.get("minecraftSkin") as string
  const headerImage = formData.get("headerImage") as string
  const content = formData.get("content") as string

  if (!id || !title || !author || !content) {
    return { success: false, error: "Missing required fields" }
  }

  try {
    const post = updateBlogPost(id, {
      title,
      author,
      minecraftSkin,
      headerImage: headerImage || "/placeholder.svg?height=400&width=800",
      content,
    })

    if (!post) {
      return { success: false, error: "Blog post not found" }
    }

    revalidatePath("/blog")
    revalidatePath("/")

    return { success: true, post }
  } catch (error) {
    return { success: false, error: "Failed to update blog post" }
  }
}

export async function deleteBlog(id: string) {
  try {
    const success = deleteBlogPost(id)

    if (!success) {
      return { success: false, error: "Blog post not found" }
    }

    revalidatePath("/blog")
    revalidatePath("/")

    return { success: true }
  } catch (error) {
    return { success: false, error: "Failed to delete blog post" }
  }
}

export async function authenticateAdmin(formData: FormData) {
  const username = formData.get("username") as string
  const password = formData.get("password") as string

  if (username === "admincomet" && password === "4945gf5sfa$%") {
    return { success: true }
  }

  return { success: false, error: "Invalid credentials" }
}
