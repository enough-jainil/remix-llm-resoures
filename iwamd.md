# Instructions for Adding New Data and Filters

## Adding New Resource Categories

1. Navigate to `app/data/learning-resources.ts` and add a new block following this structure:

```typescript:app/data/learning-resources.ts
startLine: 8
endLine: 11
```

2. Follow the existing pattern with required fields:

- title: Category name
- description: Brief category description
- color: Theme color (matches existing palette)
- resources: Array of resource items

## Adding New Resource Items

Each resource item requires:

```typescript:app/types/index.ts
startLine: 3
endLine: 9
```

## Adding New Filters

1. Update the FilterOption type in `app/types/index.ts`:

```typescript:app/types/index.ts
startLine: 1
endLine: 1
```

2. Add new filter options to CategoryFilter component
3. Update the filtering logic in ResourceGrid component

## Best Practices

1. **Resource Links**

- Ensure all URLs are valid and accessible
- Include HTTPS links only
- Test favicon generation for each new link

2. **Resource Descriptions**

- Keep descriptions concise (2-3 sentences)
- Include key features or benefits
- Mention difficulty level if applicable

3. **Categories**

- Maintain logical grouping
- Avoid duplicate resources across categories
- Keep category descriptions consistent in style

4. **Data Validation**

- Verify unique IDs for all resources
- Check for proper favicon generation
- Test all links before committing

## Example of Adding a New Category

```typescript
export const resourceBlocks = [
  // ... existing blocks ...
  {
    title: "New Category",
    description: "Description of the new category",
    color: "blue", // Choose from existing color palette
    resources: [
      {
        id: 1, // Ensure unique ID
        name: "Resource Name",
        link: "https://example.com",
        description: "Resource description",
      },
      // Add more resources...
    ],
  },
];
```

## Example of Adding a New Filter Type

1. Update FilterOption type:

```typescript
export type FilterOption = "all" | "resources" | "models" | "new-filter";
```

2. Update filter logic in components

## Deployment Checklist

- [ ] Verify all new links
- [ ] Test favicon generation
- [ ] Check mobile responsiveness
- [ ] Update sitemap if needed
- [ ] Test search functionality with new content
- [ ] Verify filter functionality
- [ ] Update meta tags if necessary

## Need Help?

Contact us:

```typescript:app/components/ContactSection.tsx
startLine: 13
endLine: 24
```

Remember to maintain consistent formatting and follow the existing patterns in the codebase when adding new content.

```

This instruction file provides a clear guide for adding new filters and data while maintaining consistency with the existing codebase structure. Would you like me to elaborate on any specific section?
```
