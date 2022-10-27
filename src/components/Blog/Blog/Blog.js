import React from 'react';

const Blog = () => {
    return (
        <div>
          <div className='w-50 border border-2 text-center m-4 p-2 mx-auto rounded-md'>
          <h3>Question-1.What is cors?</h3>
          <p><b>Ans:</b> Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.</p>  
          </div>
          <div className='w-50 border border-2 text-center m-4 p-2 mx-auto rounded-md'>
            <h3>Question-2. Why are you using firebase? What other options do you have to implement authentication?</h3>
            <p><b>Ans:</b>Most apps need to know the identity of a user. Knowing a user's identity allows an app to securely save user data in the cloud and provide the same personalized experience across all of the user's devices.
Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.

Firebase Authentication integrates tightly with other Firebase services, and it leverages industry standards like OAuth 2.0 and OpenID Connect, so it can be easily integrated with your custom backend.

When you upgrade to Firebase Authentication with Identity Platform, you unlock additional features, such as multi-factor authentication, blocking functions, user activity and audit logging, SAML and generic OpenID Connect support, multi-tenancy, and enterprise-level support.</p>
          </div>
          <div className='w-50 border border-2 text-center m-4 p-2 mx-auto rounded-md'>
            <h3>Question-3.How does the private route work?</h3>
            <p><b>Ans:</b>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).</p>
          </div>
          <div className='w-50 border border-2 text-center m-4 p-2 mx-auto rounded-md'>
            <h3>Question-4.What is Node? How does Node work?</h3>
            <p><b>Ans:</b>Node. js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node. js wastes no time or resources on waiting for I/O requests to return.</p>
          </div>
        </div>
    );
};

export default Blog;