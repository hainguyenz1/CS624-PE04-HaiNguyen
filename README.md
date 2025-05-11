# CS624-PE04-HaiNguyen
Input

The input to this program is a predefined array of six user profiles, each containing a name, occupation, image, and a short description. These data objects also include a Boolean flag showThumbnail that determines whether a profile card should be rendered as a full-sized view or a thumbnail.

Process

The program uses React Native components and Flexbox layout techniques to dynamically display profile cards. Each card is rendered using a ProfileCard component. When a user taps on a card, an onPress handler toggles its showThumbnail state using immutability-helper, triggering a re-render. Styling logic conditionally applies scaling to cards when they are in thumbnail view. Cards are arranged using flexWrap to allow natural wrapping and grid-like alignment.

Output

The result is an interactive gallery of six profile cards that initially appear as thumbnails. When tapped, a card expands, pushing surrounding cards in a fluid, responsive layout.
