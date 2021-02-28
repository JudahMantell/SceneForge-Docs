
SceneForge Studio accepts models with a linked skeleton/armature.  This allows the software to use [Inverse Kinematics](https://en.wikipedia.org/wiki/Inverse_kinematics#:~:text=In%20computer%20animation%20and%20robotics,the%20start%20of%20the%20chain. "Wikipedia article on Inverse Kinematics") (IK) for easy posing of rigged characters.

No matter what option you choose below, SceneForge will generate IK with three connecting bones, regardless of which limb.
For example:
![Screenshot](img\skeleton.png)
---
**When configuring rigged characters in the scene, there are two options:**

### Humanoid Rigs ###
Humanoid character rigs are read by finding bones named one of the following: "head", "foot", "hand".
The IK rig is then created, allowing the user to pose the model as needed by grabbing those bones (See "Posing Characters" below).

### Non-Humanoid Rigs ###
Non-Humanoid character rigs are read by finding the end "leaf" bones of each extremity.  This can be used for any type of rigged model including animals.  
Additionally, this mode is also useful if your *humanoid* model does not have a properly named skeleton hierarchy.

An example of this is as follows:
```
├─ Character Root Bone/
│  └─ Left Arm 
│    └─ Left Upper Arm
│       └─ Left Forearm
│         └─ Left Hand --- This is the "Leaf" bone that will be used.  Because it has the word "hand", it will be used for both Humanoid and Non-Humanoid rigs.
```

### Posing Characters ###
To pose characters, grab and manipulate the IK indicator orbs.  The positions of these markers are saved in the .VPS file, and will persist between sessions, just like everything else in the scene.

### Resources
* This is a fantastic guide to making and exporting animated/rigged glTF characters using Blender and Mixamo:
<https://www.donmccurdy.com/2017/11/06/creating-animated-gltf-characters-with-mixamo-and-blender/>