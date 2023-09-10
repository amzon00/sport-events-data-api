# 1. Data Transformation - approach and reasoning:

The purpose of the formating function "formatEventData" is to extract essential information and present it in a more simplified format. The approach involves selectively retrieving and parsing only the necessary details and delivering them to the client in a format that is easily understandable.

# 2. Code Organization - project structure:

I chose the current project structure because is a common and organized way to structure a Node.js app. My reasoning includes:

- Separation of Concerns
- Scalability
- Code Reusability
- Readability and Maintainability

# 3. Data Caching - caching strategy:

For the current project caching i decided to use "Node-Cache" as a caching library. I made that choice beacuse in my opinion Node-Cache is popular choice for in-memory caching, with over 2 million weekly downloads, making it a widely adopted library within the Node.js community. Also it is simple and straightforward.

Pros: Simplicity, Efficiency

Cons: No Cache Invalidation, Data Freshness
