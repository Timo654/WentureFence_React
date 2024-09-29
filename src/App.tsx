import { useState } from 'react';
import { Unity, useUnityContext } from "react-unity-webgl";
import './App.css'

const App = () => {

  const [length, setLength] = useState(1);
  const [angle, setAngle] = useState(90);
  const [fenceID, setFenceID] = useState(0);

  const {
    unityProvider,
    isLoaded,
    sendMessage,
  } = useUnityContext({
    loaderUrl: "/unitybuild/webgl.loader.js",
    dataUrl: "/unitybuild/webgl.data",
    frameworkUrl: "/unitybuild/webgl.framework.js",
    codeUrl: "/unitybuild/webgl.wasm",
    webglContextAttributes: {
      preserveDrawingBuffer: true,
    },
  });

  const handleAddFence = () => {
    if (isLoaded === false) {
      return;
    }
    sendMessage("Handler", "AddFence", `{\"angle\":${angle},\"length\":${length}}`);
  };

  const handleRemoveFence = () => {
    if (isLoaded === false) {
      return;
    }
    sendMessage("Handler", "RemoveFence", `{\"fenceID\": ${fenceID}}`);
  };

  const handleToggleCameraMode = () => {
    if (isLoaded === false) {
      return;
    }
    sendMessage("Handler", "ChangeCameraMode", "{}");
  };

  return (
    <div className="">
      <h1>Fence creator</h1>
      <Unity unityProvider={unityProvider} style={{ width: 800, height: 600 }} />
      <div className="buttons">
        <button onClick={() => handleAddFence()}>
          Add a fence
        </button>
        <input
          name="length"
          type='number'
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
        />
        <input
          name="angle"
          type='number'
          value={angle}
          onChange={(e) => setAngle(Number(e.target.value))}
        />
        <button onClick={() => handleRemoveFence()}>
          Remove a fence
        </button>
        <input
          name="fenceID"
          type='number'
          value={fenceID}
          onChange={(e) => setFenceID(Number(e.target.value))}
        />

        <button onClick={handleToggleCameraMode}>Toggle camera</button>
      </div>
    </div>
  );
};

export default App
