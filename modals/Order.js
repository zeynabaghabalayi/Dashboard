// models/Order.js
import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema({
    name: {
        first: { type: String, required: true },
        last: { type: String, required: true },
    },
    total: { type: Number, required: true },
    status: { type: String, required: true },
    method: { type: String, required: true },
    date: { type: String, required: true },
});

export default mongoose.models.Order || mongoose.model('Order', OrderSchema);
