import Order from '../models/order.model.js'

export const getOrders = async (req, res) => {
    const orders = await Order.find({
        user: req.user.id
    }).populate('user');
    res.json(orders);
};

export const createOrder = async (req, res) => {
    const { tipoPrendas, ubicacionRecojo, ubicacionEntrega, peso } = req.body;

    const newOrder = new Order({
        tipoPrendas,
        ubicacionRecojo,
        ubicacionEntrega,
        peso,
        user: req.user.id
    });
    const savedOder = await newOrder.save();
    res.json(savedOder);
};

export const getOrder = async (req, res) => {
    const order = await Order.findById(req.params.id).populate('user');
    if (!order) return res.status(404).json({ message: 'Order not found' });
    res.json(order);
};

export const deleteOrder = async (req, res) => {
    const order = await Order.findByIdAndDelete(req.params.id);
    if (!order) return res.status(404).json({ message: 'Order not found' });
    res.sendStatus(204);
};

export const updateOrder = async (req, res) => {
    const order = await Order.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    });
    if (!order) return res.status(404).json({ message: 'Order not found' });
    res.json(order);
};
