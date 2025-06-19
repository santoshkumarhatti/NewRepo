
"use client";

import { Navbar } from '@/components/landing/navbar';
import { Footer } from '@/components/landing/footer';
import { useSearchParams } from 'next/navigation';
import { courses, getCourseBySlug } from '@/lib/courses';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertTriangle, Tag } from 'lucide-react';
import Link from 'next/link';

export default function CheckoutPage() {
  const searchParams = useSearchParams();
  const courseId = searchParams.get('courseId');
  const course = courseId ? getCourseBySlug(courseId) : null;

  const handlePayment = () => {
    if (!course) {
      alert('Please select a course first to proceed with payment.');
      return;
    }

    const razorpayKeyId = 'rzp_live_eCTHZLuHrmbmE1'; // Your provided Razorpay Key ID

    // --- Conceptual Razorpay Integration ---
    // In a real Razorpay integration:
    // 1. Ensure Razorpay SDK script is loaded: <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
    //    (Typically added in your main layout file or loaded dynamically).
    // 2. Create an 'order' on your backend server using Razorpay's Orders API (with your secret key)
    //    to get an 'order_id'. This is crucial for security and proper payment tracking.
    // 3. Initialize Razorpay checkout on the client-side with that 'order_id' and your 'key_id'.

    const conceptualRazorpayOptions = {
      key: razorpayKeyId,
      amount: course.price * 100, // Amount in the smallest currency unit (e.g., paise for INR)
      currency: "INR", // Or your preferred currency
      name: "Prime Leap Institute",
      description: `Purchase of ${course.title}`,
      image: "/logo-placeholder.png", // Replace with your actual logo URL
      // order_id: "ORDER_ID_GENERATED_ON_YOUR_SERVER", // This would come from your backend
      handler: function (response: any) {
        // This function is called after payment is successful
        alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}\nTransaction details would be sent to your server for verification.`);
        // You would then verify the payment signature on your backend and fulfill the order.
        // Example: router.push(`/payment-success?order_id=${response.razorpay_order_id}`);
      },
      prefill: {
        // name: "Customer Name", // Optional: Prefill user's name
        // email: "customer@example.com", // Optional: Prefill user's email
        // contact: "9999999999", // Optional: Prefill user's contact
      },
      notes: {
        course_slug: course.slug,
        course_id: course.id, // Assuming your course object has an 'id' field
      },
      theme: {
        color: "#3F51B5", // Your primary theme color (Deep Blue)
      },
    };

    // This is a placeholder for actual Razorpay SDK initialization.
    // In a real app, you would check if (window as any).Razorpay is loaded.
    // if ((window as any).Razorpay) {
    //   const rzp = new (window as any).Razorpay(conceptualRazorpayOptions);
    //   rzp.on('payment.failed', function (response: any) {
    //     alert(`Payment failed: ${response.error.description}\nCode: ${response.error.code}`);
    //   });
    //   rzp.open();
    // } else {
    //   alert("Razorpay SDK not found. This is a conceptual demonstration for prototyping.");
    // }

    alert(
      `This is where Razorpay checkout would be initiated with:\n` +
      `Key ID: ${razorpayKeyId}\n` +
      `Course: ${course.title}\n` +
      `Price: ${course.price} ${conceptualRazorpayOptions.currency}\n` +
      `Amount (in smallest unit): ${conceptualRazorpayOptions.amount}\n\n` +
      `A full integration requires loading the Razorpay SDK and server-side order creation to get an 'order_id'.\n\n` +
      `Conceptual Options (also logged to console):`
    );
    console.log("Conceptual Razorpay Checkout Options:", conceptualRazorpayOptions);
  };


  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24 pb-16 flex items-center justify-center bg-secondary">
        <div className="container mx-auto px-4">
          <Card className="max-w-md mx-auto shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-primary text-center">Checkout</CardTitle>
              {course && (
                <CardDescription className="text-center">
                  You are about to purchase: <strong>{course.title}</strong>
                </CardDescription>
              )}
            </CardHeader>
            <CardContent>
              {course ? (
                <div className="space-y-4">
                  <p className="text-lg text-muted-foreground flex items-center justify-center">
                    <Tag className="mr-2 h-5 w-5 text-accent" />
                    Course Price: <span className="font-semibold text-foreground ml-1">${course.price.toFixed(2)}</span>
                  </p>
                  <p className="text-sm text-muted-foreground text-center">
                    Click the button below to proceed with a conceptual Razorpay payment.
                    A full integration requires the Razorpay SDK and server-side setup.
                  </p>
                  <Button
                    onClick={handlePayment}
                    className="w-full bg-accent hover:bg-accent/80 text-accent-foreground"
                  >
                    Proceed to Payment with Razorpay
                  </Button>
                </div>
              ) : (
                <div className="text-center text-destructive flex flex-col items-center">
                  <AlertTriangle className="h-12 w-12 mb-4" />
                  <p className="text-lg font-semibold mb-2">Course Not Found</p>
                  <p className="text-muted-foreground mb-4">
                    The course ID is missing or invalid. Please select a course to proceed.
                  </p>
                  <Button variant="outline" asChild>
                    <Link href="/courses">Browse Courses</Link>
                  </Button>
                </div>
              )}
            </CardContent>
            <CardFooter>
                <p className="text-xs text-muted-foreground text-center w-full">
                    By completing your purchase, you agree to our Terms of Service and Privacy Policy.
                </p>
            </CardFooter>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
