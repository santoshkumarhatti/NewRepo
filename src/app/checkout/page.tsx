
"use client";

import { Navbar } from '@/components/landing/navbar';
import { Footer } from '@/components/landing/footer';
import { useSearchParams } from 'next/navigation';
import { courses, getCourseBySlug } from '@/lib/courses';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertTriangle, Tag } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function CheckoutPage() {
  const searchParams = useSearchParams();
  const courseId = searchParams.get('courseId');
  const course = courseId ? getCourseBySlug(courseId) : null;
  const router = useRouter();

  const handlePayment = () => {
    if (!course) {
      alert('Please select a course first to proceed with payment.');
      return;
    }

    const razorpayKeyId = 'rzp_live_eCTHZLuHrmbmE1'; 

    const courseTitleText = course.title || 'Selected Course';
    const courseDescriptionText = course.description || 'Quality online course';
    const dynamicPaymentDescription = `${courseTitleText} - ${courseDescriptionText.substring(0, 70)}${courseDescriptionText.length > 70 ? '...' : ''}`;

    const razorpayOptions = {
      key: razorpayKeyId,
      amount: course.price * 100, 
      currency: "USD",
      name: "Prime Leap Institute", // This is your merchant name
      description: dynamicPaymentDescription, // Dynamic description of the item being purchased
      image: "/logo-placeholder.png", 
      // order_id: "ORDER_ID_FROM_YOUR_SERVER", // For a full, secure integration, an order_id should be generated on your server.
      handler: function (response: any) {
        alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}\nFor a real app, you would now verify this payment on your server and then grant access to the course.`);
        // Example: router.push(`/payment-success?payment_id=${response.razorpay_payment_id}&order_id=${response.razorpay_order_id}`);
      },
      prefill: {
        // name: "Customer Name", 
        // email: "customer@example.com", 
        // contact: "9999999999", 
      },
      notes: {
        course_slug: course.slug,
        course_title: course.title,
      },
      theme: {
        color: "#3F51B5", 
      },
    };

    if ((window as any).Razorpay) {
      const rzp = new (window as any).Razorpay(razorpayOptions);
      rzp.on('payment.failed', function (response: any) {
        alert(`Payment failed: ${response.error.description}\nCode: ${response.error.code}\nSource: ${response.error.source}\nStep: ${response.error.step}\nReason: ${response.error.reason}`);
        console.error("Razorpay Payment Failed:", response.error);
      });
      rzp.open();
    } else {
      alert("Razorpay SDK not found. Please ensure it's loaded. If you've just added it, try refreshing the page.\n\nConceptual Checkout Options (also logged to console):");
      console.log("Conceptual Razorpay Checkout Options (SDK not loaded):", razorpayOptions);
    }
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
