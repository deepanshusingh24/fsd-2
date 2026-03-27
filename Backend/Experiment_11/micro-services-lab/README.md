# Microservices Lab - Customer and Order Services

This project contains two Flask-based microservices that demonstrate inter-service communication.

## Services

### Customer Service (Port 5001)
- **Endpoint**: `GET /customers/<user_id>/orders`
- **Description**: Fetches customer details and their orders by calling the Order Service
- **Example**: `GET http://localhost:5001/customers/101/orders`

### Order Service (Port 5002)
- **Endpoint 1**: `GET /orders/user/<user_id>`
- **Description**: Returns all orders for a specific user
- **Example**: `GET http://localhost:5002/orders/user/101`

- **Endpoint 2**: `PUT /orders/<order_id>/status`
- **Description**: Updates the status of a specific order
- **Body**: `{"order_status": "new_status"}`
- **Example**: `PUT http://localhost:5002/orders/1/status` with body `{"order_status": "Delivered"}`

## Setup and Running

1. Install dependencies for both services:
   ```bash
   cd customer-service
   pip install -r requirements.txt

   cd ../order-service
   pip install -r requirements.txt
   ```

2. Start the Order Service (in background):
   ```bash
   cd order-service
   python order_app.py
   ```

3. Start the Customer Service (in new terminal):
   ```bash
   cd customer-service
   python customer_app.py
   ```

## Sample Data

### Customers
- ID 101: Customer-1 (customer-1@example.com)
- ID 102: Customer-2 (customer-2@example.com)

### Orders
- Order 1: User 101, Status: Delivered, Amount: 2500
- Order 2: User 101, Status: Processing, Amount: 1200
- Order 3: User 102, Status: Delivered, Amount: 800

## Testing

You can test the APIs using curl or any HTTP client:

```bash
# Get customer orders
curl http://localhost:5001/customers/101/orders

# Get orders for a user
curl http://localhost:5002/orders/user/101

# Update order status
curl -X PUT -H "Content-Type: application/json" -d '{"order_status":"Shipped"}' http://localhost:5002/orders/1/status
```