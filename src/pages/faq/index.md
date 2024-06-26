---
title: FAQs
---

# Table of Contents
1. [How to select relevant cp4i environment for jam-in-a-box labs in IBM Technology Zone(TZ)?](#TZ-selection)

2. [How to create instances for IBM app conect, API connect, Event Streams once TZ environment is  provisioned to you?](#TZ-env-email)

3. [How to Access Platform Navigator login details?](#TZ-ocp-console)

4. [How to sign up with mailtrap.in?](#TZ-mailtrap)

5. [How to configure APIC provider organizational before starting the APIC labs?](#TZ-apic-porg)

6. [How to configure Developer Portal before starting the APIC labs?](TZ-apic-ptl)


---

## 1. How to select relevant cp4i environment for jam-in-a-box labs in IBM Technology Zone(TZ)?<a name="TZ-selection)"></a>

When you go to the TZ environment reservation page, you will be asked to select appropriate options. 
Please select below mentioned options.

![](./images/27.png)

## 2. How to create instances for IBM app conect, API connect, Event Streams once TZ environment is  provisioned to you?<a name="TZ-ocp-console"></a>

After you submit the request to reserve the environment, it will take 4 to 5 hours to provisioned and installed CP4I above mentioned capabilities.
Once environment is available to use, you will receive an email with all the details. Below is a sample.

![](./images/1.png)

Click on the collection and go to My Libery ->My Reservations page. You will find OCP username/password along with the link.

![](./images/61.png)

Log in to the OCP cluster and go to Installed operators under **integration** namespace.  Please remember you will craete all the instances and log work under **integration** namespace.

![](./images/62.png)

a.	**Create App connect instance.** 
Go to the "Installed Operators" then select "IBM App Connect". Go to "All instances"  and click on "Create New" Dashboard.

![](./images/63.png)

Write the name of the instance, accept licence and select the storage as mentioned in below. Click "create"

![](./images/64.png)

b. **Create API Connect Instance.**
Go to the "Installed Operators" then select "IBM API Connect". Go to "All instances"  and click on "Create New"  API Connect cluster.

![](./images/65.png)

Write the name of the instance, accept licence and select the storage as mentioned in below. Click "create"

![](./images/99.png)

c. **Create Event Streams Instance.**
Go to the "Installed Operators" then select "IBM Event Streams". Go to "All instances"  and click on "Create New"  Event Streams.

![](./images/67.png)

Go to YAML view. Download the yaml from [here](./resources/es-instance.yaml). and replace in the black console as mentioned below.

![](./images/69.png)

## 3. How to Access Platform Navigator login details?<a name="TZ-ocp-console"></a>

a. How to access Platform Navigator link?

Go to the Installed operations->IBM cloudPak for integration->PLatform UI.

![](./images/70.png)

If you open the Platform Navigator instance, It will show you the Platform Navigator link as mentioned below.

![](./images/71.png)

b. How to access Platform Navigator log in credentioal?

Chnage the project to "All Projects" (**2**), go to WorkLoads->Secret(**1**). Next search for platform-auth-idp-credentials (**3**). You will find login credentiols as mentioned below.

![](./images/72.png)

![](./images/73.png)


## 4. How to sign up with mailtrap.in?<a name="TZ-mailtrap"></a>

a.	Go to https://mailtrap.io.  
b.	Sign up as new user if you do have an account with mailtrap. 
c.	Once you logged into the mailtrap then you client on Inboxed->under SMTP settings, click on “Hide Credential. You will find SMTP Host, Username, Password that you will be needing to configure your SMTP server in APIC cloud manager(Detailed instructions are below. 

![](./images/6.png)


## 5. How to configure APIC provider organizational before starting the APIC labs?<a name="TZ-apic-porg"></a>

a.	Login to **Platform Navigator** by using the user id ( as admin )and password that you have collected before. 

![](./images/7.png)

b.	Click on **Integration instances**

![](./images/8.png)

c.	Click on apic-min Api management administrator.

![](./images/9.png)

d.	Select “Common Service User Registry”

![](./images/10.png)

e.	Click on” **Resources**”

![](./images/11.png)

f.	Click on “**Notification**”

![](./images/12.png)

g.	Click on edit **“Dummy Mail Server”**

![](./images/13.png)

h.	Used the SMTP server details that you have collected during mailtrap set up to configure the e-mail server. Save the configuration, If you want to test it, click on **Test email**.

![](./images/14.png)

j.	Next, create the provider organization. Go to the cloud manager home page by clicking on the **home** icom (1) at the top left, Then click on **Provider Organization**(2). Now click on Add (3) to **Create organization**.

![](./images/15.png)

k.	You can choose any email id you want, i showed an example(1)  in the screenshot below. Save  the **user**  (2) and **password** (3), you need that to login to the **API management**.

![](./images/16.png)

## 6. How to configure Developer Portal before starting the APIC labs?<a name="TZ-apic-ptl"></a>

a. Go back to **Platform Navigator** console and click on **API management** instance.

![](./images/17.png)

b.	Select API Manager User Registry.

![](./images/18.png)

c.	Use the username and password that you have used to create the provider organization.

![](./images/19.png)

d.	Click on **Manager catalog **

![](./images/20.png)

e.	Click on **Sandbox** catalog.

![](./images/21.png)

f. Open the **Catalog** setting tab (1), click on **Portal** (2) and then click **Create** (3)

![](./images/22.png)

g. Select **portal-service** (1) as the catalog to use. Click **Create** (2)

![](./images/23.png)

h. Reset **admin Password** and test **Developer Portal** url.

   ![](./images/24.png)  
   
   - Once the portal is provisioned you will receive an email in your mailtrap account as mentioned in the green highlighted box (1). Below screenshot of a sample email. Click on the link and reset the admin password.  
    
   ![](./images/25.png)    
   - From a browser window open the Portal URL (2). Accept any potential security risks that appears.  
     
   ![](./images/25.png)  
     
     
     
    






