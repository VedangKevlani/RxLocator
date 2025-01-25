# RxLocator
COMP3901 Capstone project 2024-2025
Contributors: Vedang Kevlani, Roshae Sinclair, Jada Walters, Keshawn McGrath
### **Project Overview**

**Team Name:** RxLocator

**Supervisor:** Dr. Claudine Allen (confirmed)

**Description:**

Patients often encounter challenges when sourcing affordable and conveniently available prescribed medications. Factors such as cost, location, dosage availability, and quantity can create barriers to access. 

To address this, our team is partnering with Carib Choice Pharmacy in Portmore, St. Catherine, to develop **RxLocator**, a mobile application designed to:

- Allow patients to upload or send a prescription.
- Verify medication availability at the pharmacy.

### **Key Functionalities**

1. **Account Creation:** User data will only be stored with explicit consent to ensure privacy and compliance.
2. **Prescription OCR Scanner:** Converts handwritten prescriptions into digitized text.
3. **Inventory Verification:** Checks stock availability using an inventory system and a probabilistic model for nearby stores.
4. **Notifications:** Provides push notifications and in-app messages regarding medicine availability and pricing.
5. **Pharmacy Dashboard:** Enables pharmacies to manage prescriptions and handle patient requests.
6. **Payment Integration:** Facilitates secure transactions within the app.

### **Possible Tools and Techniques**

1. **OCR Processing:** Tesseract OCR or Google Cloud Vision API.
2. **Image Processing:** OpenCV library.
3. **Payment Integration:** Stripe or PayPal.
4. **Push Notifications:** Firebase Cloud Messaging.
5. **In-App Messaging:** Firebase In-App Messaging.

### **Languages and Technology Stack**

- **Mobile Development:**
    - React Native for cross-platform support.
- **Backend Development:**
    - Node.js or Python (Django framework).
- **Database Options:**
    - MySQL, MongoDB, or PostgreSQL.

### Tasks List

**Define Project Scope and Requirements**

- Meet with stakeholders (e.g., Carib Choice Pharmacy) to gather detailed requirements for the app.
- List the main features: account creation, prescription scanning, medication verification, notifications, pharmacy dashboard, and payment integration.

**Set Up the Development Environment**

- **Frontend:**
    - Install **React Native** for cross-platform development (Android/iOS).
    - Set up **Android Studio** for mobile development.
- **Backend:**
    - Install **Node.js** for backend development.

**Implement Account Creation Feature**

- Create user registration and login forms.
- Use Firebase or your preferred authentication method for secure login.
- Ensure all personal data is stored with explicit user consent.

**Develop the Prescription OCR Scanner**

- **Choose an OCR Library:**
    - Use **Tesseract OCR** (open-source) or **Google Cloud Vision API** (cloud-based) for text recognition.
- **Setup OCR in App:**
    - Implement a camera function to capture prescription images.
    - Process the image with OCR to convert the handwriting into digital text.
    - Clean the recognized text (remove noise and errors) to improve accuracy.
- **Test the OCR:**
    - Ensure the app can accurately recognize a variety of handwriting styles and prescription formats.

**Develop Inventory Verification System**

- **Create an Inventory Database:**
    - Set up a database to store information about available medications (e.g., stock, dosage, price).
- **Verify Availability:**
    - Implement a function to match the digitized prescription text with available medications in the pharmacy's inventory.
    - Use a probabilistic algorithm to check nearby pharmacies' stock if unavailable at the current pharmacy.

**Add Push Notifications and In-App Messaging**

- **Push Notifications:**
    - Integrate **Firebase Cloud Messaging** to notify users about prescription status (e.g., availability, price updates).
- **In-App Messaging:**
    - Use **Firebase In-App Messaging** to communicate directly within the app, e.g., to confirm orders or inform users about medication updates.

**Implement Pharmacy Dashboard**

- **Create a Dashboard for Pharmacy:**
    - Allow pharmacies to manage prescriptions, monitor stock levels, and view customer requests.
- **Backend Functions:**
    - Implement backend logic to allow the pharmacy to update inventory, mark prescriptions as filled, and process new requests.

**Integrate Payment Gateway**

- Choose a payment gateway (e.g., **Stripe** or **PayPal**).
- Implement a secure payment feature in the app to allow patients to purchase medications directly from the app.

**Testing and Debugging**

- Conduct unit tests, integration tests, and user acceptance testing (UAT).
- Test the OCR feature on a variety of prescriptions.
- Debug and refine features based on feedback.

**Deployment**

- **Frontend:**
    - Build the app for Android and/or iOS using React Native.
    - Publish to **Google Play Store** and/or **Apple App Store**.
- **Backend:**
    - Deploy the backend server to a platform like **Heroku**, **AWS**, or **DigitalOcean**.
