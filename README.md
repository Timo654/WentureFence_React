# WentureFence

Test project for creating fences by spawning in parts and adjusting their angle and length.

Current features: add new fences, delete fences, update fences, switch camera (overview and follow-the-path).

# How to use
## In web:
It's using "vite", so you probably need to install that first.

Once you have all the prerequisities, run:
`npm run dev`. 
Once you open it in the browser, you'll be welcomed by the UI.

On the right side you have the Unity window with the 3D scene. On the left you have Length, Angle and Fence ID. 
Length and angle are used for adding new fences or updating existing ones. 
Fence ID is used for updating and removing fences only — it does not matter when adding.

Toggle camera button let's you toggle between the two cameras - overview camera and follow camera (follows the fence trajectory). 

## In editor:
Use [WentureFence instead](https://github.com/Timo654/WentureFence/edit/master/README.md).
