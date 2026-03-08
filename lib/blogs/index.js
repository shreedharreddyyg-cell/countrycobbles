import banaras from "./banaras"
import storage from "./storage"
import modular from "./modular"
import timeless from "./timeless"
import emptyRoom from "./empty-room"
import colours from "./colours"

export const blogs = [
banaras,
storage,
modular,
timeless,
emptyRoom,
colours
]

export function getBlogBySlug(slug){
return blogs.find(blog => blog.slug === slug)
}