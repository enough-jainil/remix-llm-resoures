interface Resource {
  id: number;
  name: string;
  link: string;
  favicon: string;
  description?: string;
  description2?: string;
  tag2?: string;
}

export interface ResourceBlock {
  title: string;
  description: string;
  resources: Resource[];
  color?: string;
  tag: string;
  tag2?: string;
  tag3?: string;
}
