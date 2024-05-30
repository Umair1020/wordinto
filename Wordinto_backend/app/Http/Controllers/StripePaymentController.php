<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Stripe\Stripe;
use Illuminate\Support\Facades\Session;
use Stripe\PaymentIntent;
use Illuminate\Support\Facades\Mail;
use App\Mail\UserPaymentConfirmation;
use App\Mail\AdminPaymentNotification;

class StripePaymentController extends Controller
{


    public function stripe()
    {
        return view('stripe');
    }

    public function stripePost(Request $request)
    {   

        Stripe::setApiKey(env('STRIPE_SECRET'));

        try {
            
            $paymentIntent = PaymentIntent::create([
                "amount" => (int) (floatval(str_replace("$", "", $request->amount)) * 100),
                'currency' => 'usd',
                'description' => 'Test payment by Muddassir Shaikh',
            ]);

            $paymentIntent->confirm(
                [
                    'payment_method' => $request->stripeToken,
                    'return_url' => 'http://localhost:3000/payment',
                ]
            );

            $userDetails = [
                'senderName' => $request->senderName,
                'amount' => $request->amount,
                'receiverName' => $request->receiverName,
            ];

            Mail::to($request->receiverEmail)->send(new UserPaymentConfirmation($userDetails));
            $adminDetails = [
                'senderName' => $request->senderName,
                'amount' => $request->amount,
                'receiverName' => $request->receiverName,
                'receiverEmail' => $request->receiverEmail,
            ];
            Mail::to('admin@example.com')->send(new AdminPaymentNotification($adminDetails));

            Session::flash('success', 'Your payment was successful!');
            return response()->json(['message' => 'Your payment was successful!', 'payment_intent' => $paymentIntent]);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
}
