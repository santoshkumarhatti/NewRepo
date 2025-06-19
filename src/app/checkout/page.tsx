
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
import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from "@/hooks/use-toast";

// Firebase imports
import { initializeApp, type FirebaseApp } from 'firebase/app';
import { getDatabase, ref, push, set, type Database } from 'firebase/database';

// IMPORTANT: Replace with your actual Firebase configuration
// For production, use environment variables:
// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
// };

// Placeholder Firebase configuration (REPLACE WITH YOURS and use ENV VARS for production)
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  databaseURL: "YOUR_DATABASE_URL",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

let app: FirebaseApp;
let db: Database;

try {
  app = initializeApp(firebaseConfig);
  db = getDatabase(app);
} catch (error) {
  console.error("Firebase initialization error:", error);
  // Handle cases where Firebase might already be initialized or config is missing
  // In a real app, you might want to show an error to the user or disable Firebase-dependent features
}


export default function CheckoutPage() {
  const searchParams = useSearchParams();
  const courseId = searchParams.get('courseId');
  const course = courseId ? getCourseBySlug(courseId) : null;
  const router = useRouter();
  const { toast } = useToast();

  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const savePurchaseToFirebase = async (purchaseData: any) => {
    if (!db) {
      console.error("Firebase Database is not initialized.");
      toast({
        title: "Error",
        description: "Could not save purchase details. Database not available.",
        variant: "destructive",
      });
      return;
    }
    try {
      const purchasesRef = ref(db, 'purchases');
      const newPurchaseRef = push(purchasesRef);
      await set(newPurchaseRef, purchaseData);
      toast({
        title: "Purchase Recorded",
        description: "Your purchase details have been saved.",
      });
    } catch (error) {
      console.error("Error saving purchase to Firebase:", error);
      toast({
        title: "Save Error",
        description: "There was an issue saving your purchase details. Please contact support.",
        variant: "destructive",
      });
    }
  };

  const handlePayment = () => {
    if (!course) {
      toast({
        title: "No Course Selected",
        description: "Please select a course first to proceed with payment.",
        variant: "destructive",
      });
      return;
    }

    if (!userName || !userEmail || !userPhone) {
      toast({
        title: "Missing Information",
        description: "Please fill in your name, email, and phone number.",
        variant: "destructive",
      });
      return;
    }

    setIsProcessing(true);

    const razorpayKeyId = 'rzp_live_eCTHZLuHrmbmE1'; 
    const courseTitleText = course.title || 'Selected Course';
    const courseDescriptionText = course.description || 'Quality online course';
    
    const razorpayOptions = {
      key: razorpayKeyId,
      amount: course.price * 100, 
      currency: "USD",
      name: courseTitleText,
      description: `${courseDescriptionText.substring(0, 150)}${courseDescriptionText.length > 150 ? '...' : ''}`,
      image: "/logo-placeholder.png", // Replace with your actual logo URL
      handler: function (response: any) {
        const purchaseData = {
          course: {
            slug: course.slug,
            title: course.title,
            price: course.price,
          },
          user: {
            name: userName,
            email: userEmail,
            phone: userPhone,
          },
          payment: {
            paymentId: response.razorpay_payment_id,
            orderId: response.razorpay_order_id, // May be undefined in client-only flow
            signature: response.razorpay_signature, // May be undefined in client-only flow
          },
          purchaseDate: new Date().toISOString(),
        };
        
        savePurchaseToFirebase(purchaseData);
        
        toast({
          title: "Payment Successful!",
          description: `Payment ID: ${response.razorpay_payment_id}. Your purchase details are being saved.`,
        });
        setIsProcessing(false);
        // Example: router.push(`/payment-success?payment_id=${response.razorpay_payment_id}`);
      },
      prefill: {
        name: userName, 
        email: userEmail, 
        contact: userPhone, 
      },
      notes: {
        course_slug: course.slug,
        course_title: course.title,
      },
      theme: {
        color: "#3F51B5", // Matches current primary theme color, adjust if needed
      },
    };

    if ((window as any).Razorpay) {
      const rzp = new (window as any).Razorpay(razorpayOptions);
      rzp.on('payment.failed', function (response: any) {
        toast({
          title: "Payment Failed",
          description: `${response.error.description} (Code: ${response.error.code})`,
          variant: "destructive",
        });
        console.error("Razorpay Payment Failed:", response.error);
        setIsProcessing(false);
      });
      rzp.open();
    } else {
      toast({
        title: "Razorpay SDK Error",
        description: "Razorpay SDK not found. Please ensure it's loaded or try refreshing.",
        variant: "destructive",
      });
      console.log("Conceptual Razorpay Checkout Options (SDK not loaded):", razorpayOptions);
      setIsProcessing(false);
    }
  };


  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24 pb-16 flex items-center justify-center bg-secondary">
        <div className="container mx-auto px-4">
          <Card className="max-w-lg mx-auto shadow-xl">
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
                <div className="space-y-6">
                  <div>
                    <p className="text-lg text-muted-foreground flex items-center justify-center">
                      <Tag className="mr-2 h-5 w-5 text-accent" />
                      Course Price: <span className="font-semibold text-foreground ml-1">${course.price.toFixed(2)}</span>
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="userName" className="text-foreground">Full Name</Label>
                      <Input 
                        id="userName" 
                        type="text" 
                        placeholder="Enter your full name" 
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)} 
                        className="mt-1"
                        disabled={isProcessing}
                      />
                    </div>
                    <div>
                      <Label htmlFor="userEmail" className="text-foreground">Email Address</Label>
                      <Input 
                        id="userEmail" 
                        type="email" 
                        placeholder="Enter your email address" 
                        value={userEmail}
                        onChange={(e) => setUserEmail(e.target.value)}
                        className="mt-1"
                        disabled={isProcessing}
                      />
                    </div>
                    <div>
                      <Label htmlFor="userPhone" className="text-foreground">Phone Number</Label>
                      <Input 
                        id="userPhone" 
                        type="tel" 
                        placeholder="Enter your phone number" 
                        value={userPhone}
                        onChange={(e) => setUserPhone(e.target.value)}
                        className="mt-1"
                        disabled={isProcessing}
                      />
                    </div>
                  </div>
                  
                  <Button
                    onClick={handlePayment}
                    className="w-full bg-accent hover:bg-accent/80 text-accent-foreground"
                    disabled={isProcessing}
                  >
                    {isProcessing ? 'Processing...' : 'Proceed to Payment with Razorpay'}
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
