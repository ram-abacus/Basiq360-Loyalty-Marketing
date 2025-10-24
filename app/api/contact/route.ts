import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company"),
      phone: formData.get("phone"),
      goal: formData.get("goal"),
      message: formData.get("message"),
    }

    // Here you would typically send this data to your CRM, email service, or database
    console.log("Contact form submission:", data)

    // For now, we'll just return a success response
    return NextResponse.json(
      { success: true, message: "Thank you for contacting us! We will get back to you soon." },
      { status: 200 },
    )
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ success: false, message: "Something went wrong. Please try again." }, { status: 500 })
  }
}
