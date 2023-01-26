export interface FilteredData extends HeadingsType {
    url: string
    chapter: string
}
  
export interface HeadingsType {
    depth: number
    slug: string
    text: string
}
  
export interface GlobType {
    url: string
    getHeadings: () => HeadingsType[]
}