export interface IResource {
  id: string;
  title: string;
  subject?: string;
  language?: string;
  gradeLevel?: string;
  format?: string;
  type: "digital" | "physical";
  digitalFileType?: "Book" | "Video" | "Offline Download";
  image: string;
  condition?: "New" | "Used";
  size?: "Small" | "Medium" | "Large" | "Extra Large" | "N/A";
}

export interface ILiteracy {
  id: string;
  title: string;
  description: string;
  videos: number;
  pdfs: number;
  category: string;
  image: string;
}
