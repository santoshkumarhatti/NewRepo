
"use client";

import { Navbar } from '@/components/landing/navbar';
import { Footer } from '@/components/landing/footer';
import { useSearchParams } from 'next/navigation';
import { courses, getCourseBySlug } from '@/lib/courses';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertTriangle } from 'lucide-react';
import Link from 'next/link';

export default function CheckoutPage() {
  const searchParams = useSearchParams();
  const courseId = searchParams.get('courseId');
  const course = courseId ? getCourseBySlug(courseId) : null;

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
                  <p className="text-muted-foreground">
                    Course Price: <span className="font-semibold text-foreground">$99.00</span> (Example Price)
                  </p>
                  <p className="text-sm text-muted-foreground">
                    This is where your Razorpay integration would go. 
                    Clicking the button below would typically initiate the payment process.
                  </p>
                  <Button 
                    className="w-full bg-accent hover:bg-accent/80 text-accent-foreground"
                    onClick={() => alert(`Initiating Razorpay payment for ${course.title}`)}
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
