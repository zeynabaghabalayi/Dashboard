import connectToDatabase from '../../../lib/mongodb';
import Order from '../../../modals/Order';

export default async function handler(req, res) {
    await connectToDatabase();

    console.log(req.method, 'req.method');
    if (req.method === 'POST') {
        try {
            const { name, total, status, method, date } = req.body;

            const order = new Order({
                name,
                total,
                status,
                method,
                date,
            });

            await order.save();
            res.status(201).json({ success: true, data: order });
        } catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
    } else if (req.method === 'GET') {
        // Fetch all orders
        try {
            const orders = await Order.find({});
            res.status(200).json({ success: true, data: orders });
        } catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
    } else {
        res.status(405).json({ success: false, message: 'Method Not Allowed' });
    }
}
