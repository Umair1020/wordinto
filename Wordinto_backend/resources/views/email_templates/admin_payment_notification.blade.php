<!DOCTYPE html>
<html>
<head>
    <title>New Payment Received</title>
</head>
<body>
    <h1>New Payment Received</h1>
    <p>A new payment has been received from {{ $details['senderName'] }}.</p>
    <p>Amount: {{ $details['amount'] }}</p>
    <p>Receiver's Name: {{ $details['receiverName'] }}</p>
    <p>Receiver's Email: {{ $details['receiverEmail'] }}</p>
</body>
</html>
