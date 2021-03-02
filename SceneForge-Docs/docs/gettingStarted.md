
# Getting Started


## Download the SceneForge Alpha
Download the latest `.exe` [from the Github repo (under Releases)](https://github.com/MidnightCoffeeInc/SceneForge-Alpha-Test/releases) You can also download the `Source Code.zip` which contains a simple example project. The `Source Code.zip` file does not contain the source code to the application--only the example project, which includes a few 3D Models and textures.

## A Note on Application Performance
Because SceneForge is a creative application, performance (and subsequently framerate) is dependant on what you build.  The more objects/polygons/tris in the scene, the higher the risk of frames dropping.  Same goes for lights.
### A Note on Lighting
All lighting in SceneForge is realtime.  There are no baked lights in the scene, nor is there the ability to do so at runtime.  This ensures that all lights are easily modifiable, an important part of realtime virtual production.

## Creating a Project
To create a project, select the `New Project` option in the main menu (pictured below).  You can use the pointer on your right controller to point, and the right trigger to click.
![Screenshot](img/mainMenu.png)
Next, choose a name and for the project (below) using the VR keyboard now enabled.
![Screenshot](img/createProject.png)

Next, choose a location using the file browser.
![Screenshot](img/fileSelector.png)

When creating a project with Sceneforge, the software will automatically generate the required file structure in your specified directory. When opening a project, Sceneforge will check if the file structure is correct, and will fix/add any incorrect folders.

```
├─ Project Root Folder/
│  └─ 3D Models          --- Place all 3D Model files here.
│  └─ Textures           --- Place all .PNG textures here.
│  └─ 360 Images         --- Place all .PNG 360 Degree/Pano images here.
│  └─ Audio              --- Place all audio files here.
│  └─ Image Output       --- This is where all taken photos are exported.
│  └─ Scenes             --- This is where all scenes are stored
│  └─ Scripts            --- This is where all scripts are stored.
│  └─ Storyboards        --- This is where all storyboards are exported.
│  └─ Video Output       --- This is where all taken videos are stored.
│  └─ [PROJECT NAME].vps --- This is the actual project file.
```
---
## Opening an Existing Project
To Open an existing project, select the `Open Project` option in the main menu (pictured above).

Next, navigate to the location of your `.vps` file using the file browser (pictured above).

After loading, you will be taken to your loaded scene.

---
## Importing Custom Assets
To import custom art assets, simply drag the file(s) to their respective folders in the project directory.

SceneForge Studio accepts different file types for different types of assets:

* For 3D Models, Sceneforge uses the glTF format.  It accepts .glB files and .glTF files.  
It will also read .zip archives containing those formats and their textures.*
* For textures, at the moment SceneForge accepts only .png files.  This ensures compatability across all uses of images in a project, including skyboxes and backdrop textures.
* For Skyboxes, SceneForge accepts only .png files.  In order for the scene to display skies correctly, the image should be in the *equirectangular* 360 Degree/Panorama image format.
- - -
### More About 3D Models
* At the moment, the glTF model importer only supports triangle meshes (i.e. mesh type = TRIANGLE), whereas the glTF format allows lines (i.e. mesh type = LINES) and point clouds (i.e. mesh type = POINTS).  In the future, we hope to support those as well. 
* To check if a glTF file contains unsupported LINES/POINTS meshes, you can use the `inspect` command in the `gltf-transform` command line tools. 
* Any 3D model (.FBX, .OBJ, etc) can be converted into .glTF via online tools [like this one.](https://blackthread.io/gltf-converter/){:target="_blank"}
* glTF models can also be downloaded from a variety of sources, such as [SketchFab.](http://sketchfab.com/){:target="_blank"}

