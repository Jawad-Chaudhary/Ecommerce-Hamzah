import { defineType,defineField } from "sanity";

export const category = defineType({
  name: "category",
  title: "Category",
  type: "document",
  fields:[
    defineField({
      name: "name",
      title: "Category name",
      type: "string",
      validation: (Rule) => Rule.required(),
    })
  ]
})