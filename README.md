
# Webhook Forwarder

This is a simple, yet powerful Node.js application designed to forward requests to a specified webhook URL. It's particularly useful for testing and development purposes, where you might need to quickly set up a service to send payloads to a webhook endpoint.

## Features

- Easy to set up and use.
- Configurable port and webhook URL through environment variables.
- Supports any kind of webhook endpoint.
- Useful for testing webhook integrations in development environments.

## Getting Started

### Prerequisites

Before you begin, ensure you have Node.js installed on your system.

### Installation

Clone the repository to your local machine:

```bash
git clone https://github.com/TechProofing/webhook-forwarder.git
cd webhook-forwarder
```

Install the necessary packages:

```bash
npm install
```

### Configuration

The application requires the following environment variables:

- `WEBHOOK_SITE_ADDRESS`: The URL of the webhook endpoint where data will be forwarded.
- `PORT` (optional): The port number on which the application will run. Defaults to `3000` if not specified.

You can set these variables directly in your environment, or use a `.env` file at the root of the project:

```env
WEBHOOK_SITE_ADDRESS=https://webhook.site/your-webhook-url
PORT=3000
```

### Running the Application

To start the application, simply run:

```bash
npm start
```

The server will start and listen on the specified port (or 3000 by default), ready to forward requests to your configured webhook URL.

## Docker Support

This application can also be run using Docker. Please refer to the Dockerfile in the repository for details.

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Questions or Feedback

If you have any questions or feedback, please don't hesitate to open an issue in the GitHub repository.
