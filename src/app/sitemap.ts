import { Metadata, MetadataRoute } from "next"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: "http://localhost:3000",
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
        url: "http://localhost:3000/sign-in",
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
    },
    {
        url: "http://localhost:3000/sign-up",
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
    } ,
    {
        url: "http://localhost:3000/eventos",
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 1.0,
        
    }
  ]
}