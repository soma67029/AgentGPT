export interface AgentTemplate {
  name: string;
  goal: string;
}

export const geospatialTemplates: AgentTemplate[] = [
  {
    name: "ImageryScout",
    goal: "Search and download high-resolution satellite imagery for the Amazon rainforest to monitor deforestation activities over the last year.",
  },
  {
    name: "DataArchitect",
    goal: "Prepare a comprehensive training dataset with image chips and labels for automated building footprint extraction in urban areas.",
  },
  {
    name: "ModelMaster",
    goal: "Train a state-of-the-art deep learning model using PyTorch for multi-class land cover classification on Sentinel-2 imagery.",
  },
  {
    name: "GeoPredictor",
    goal: "Apply a trained segmentation model to new aerial datasets to detect and georeference environmental changes in coastal regions.",
  },
  {
    name: "MapMaker",
    goal: "Generate an interactive multi-layer visualization using Leafmap for local vector and raster analysis results, including customizable styling.",
  },
];
