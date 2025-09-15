import Link from "next/link"
import { Button } from "@/components/ui/button"

export function SupportCenter() {
  const supportOptions = [
    {
      title: "Help Center",
      description: "Browse our comprehensive knowledge base and tutorials",
      icon: "📚",
      link: "/help",
    },
    {
      title: "Discord Community",
      description: "Join our Discord server for real-time help and community support",
      icon: "💬",
      link: "#",
    },
    {
      title: "Bug Reports",
      description: "Report bugs and issues to help us improve Comet Client",
      icon: "🐛",
      link: "#",
    },
    {
      title: "Feature Requests",
      description: "Suggest new features and improvements for future updates",
      icon: "💡",
      link: "#",
    },
  ]

  const faqs = [
    {
      question: "Comet Client won't start",
      answer:
        "Make sure you have Java 17 or later installed. Try running as administrator and check your antivirus settings.",
    },
    {
      question: "Mods aren't loading",
      answer:
        "Ensure your mods are compatible with your Minecraft version and mod loader. Check the mods folder in your Comet Client directory.",
    },
    {
      question: "Low FPS or performance issues",
      answer:
        "Update your graphics drivers, allocate more RAM to Minecraft, and ensure no other programs are using excessive resources.",
    },
    {
      question: "Can't connect to servers",
      answer:
        "Check your internet connection, verify the server is online, and ensure your firewall isn't blocking Comet Client.",
    },
    {
      question: "Login issues",
      answer:
        "Verify your Minecraft account credentials, check if Minecraft services are online, and try logging out and back in.",
    },
  ]

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Support Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {supportOptions.map((option, index) => (
            <Link
              key={index}
              href={option.link}
              className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 text-center group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{option.icon}</div>
              <h3 className="text-lg font-semibold mb-3 text-white">{option.title}</h3>
              <p className="text-gray-400 text-sm">{option.description}</p>
            </Link>
          ))}
        </div>

        {/* Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
            <h2 className="text-2xl font-bold mb-6 text-white">Contact Support</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-2xl text-white placeholder:text-gray-400 focus:outline-none focus:border-white/40 transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-2xl text-white placeholder:text-gray-400 focus:outline-none focus:border-white/40 transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <select className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-2xl text-white focus:outline-none focus:border-white/40 transition-colors">
                  <option value="">Select a topic</option>
                  <option value="technical">Technical Issue</option>
                  <option value="account">Account Problem</option>
                  <option value="feature">Feature Request</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-2xl text-white placeholder:text-gray-400 focus:outline-none focus:border-white/40 transition-colors resize-none"
                  placeholder="Describe your issue or question..."
                ></textarea>
              </div>
              <Button className="w-full bg-white text-black hover:bg-gray-200 rounded-2xl py-3 font-semibold">
                Send Message
              </Button>
            </form>
          </div>

          {/* System Info */}
          <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
            <h2 className="text-2xl font-bold mb-6 text-white">System Information</h2>
            <p className="text-gray-400 mb-6">
              When reporting issues, please include your system information to help us diagnose the problem faster.
            </p>

            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="font-semibold mb-2 text-white">How to find system info:</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-start space-x-2">
                    <span className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0"></span>
                    <span>
                      <strong>Windows:</strong> Press Win + R, type "dxdiag", press Enter
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0"></span>
                    <span>
                      <strong>macOS:</strong> Apple menu → About This Mac
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0"></span>
                    <span>
                      <strong>Linux:</strong> Run "lscpu" and "lshw" in terminal
                    </span>
                  </li>
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="font-semibold mb-2 text-white">Include in your report:</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-start space-x-2">
                    <span className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0"></span>
                    <span>Operating System version</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0"></span>
                    <span>Java version</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0"></span>
                    <span>Comet Client version</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0"></span>
                    <span>List of installed mods</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">Common Issues</h2>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-white/10 pb-6 last:border-b-0">
                <h3 className="text-lg font-semibold mb-3 text-white">{faq.question}</h3>
                <p className="text-gray-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
