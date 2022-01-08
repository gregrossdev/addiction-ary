import sanityClient from "@sanity/client";
export default sanityClient({
  projectId: "4ahafitf",
  dataset: "production",
  useCdn: true,
});
