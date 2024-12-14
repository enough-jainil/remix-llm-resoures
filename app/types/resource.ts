export interface Resource {
  id: number;
  name: string;
  link: string;
  favicon: string;
  description?: string;
  description2?: string;
}

export interface ResourceBlockProps {
  title: string;
  description: string;
  resources: Resource[];
  color?: string;
  tag: string;
  tag2?: string;
  tag3?: string;
}
