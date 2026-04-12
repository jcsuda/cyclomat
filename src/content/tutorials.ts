import { Tutorial } from "@/lib/types";

export const learnIntro = {
  heading: "Learn Cyclomat",
  subtext:
    "Follow these guided tutorials to go from your first shape to complex layered compositions. Each lesson builds on the last.",
};

export const tutorials: Tutorial[] = [
  {
    id: "first-shape",
    title: "Your First Shape",
    subtitle: "Create a complete, symmetric form",
    difficulty: "beginner",
    outcome: "A clean, closed geometric shape using two arms",
    steps: [
      {
        step: 1,
        title: "Start with two arms",
        description:
          "Open Cyclomat and set the number of arms to 2. This is the simplest configuration that creates interesting shapes.",
        tip: "Two arms is where all great Cyclomat artwork begins.",
      },
      {
        step: 2,
        title: "Set whole-number frequencies",
        description:
          "Set both arm frequencies to whole numbers, like 3 and 5. Whole numbers produce closed, symmetric shapes.",
        tip: "Try different ratios: 2:3, 3:5, 4:7. Each creates a distinct shape family.",
      },
      {
        step: 3,
        title: "Adjust the radius slowly",
        description:
          "Change the radius of the second arm. Watch how the shape stretches and contracts. Small changes create subtle variations within the same family.",
      },
      {
        step: 4,
        title: "Set completeness to 100%",
        description:
          "Make sure the drawing completes its full cycle. At 100%, the shape closes perfectly. Lower values show partial traces.",
        tip: "A closed shape means the pen has returned to its starting point.",
      },
    ],
  },
  {
    id: "complexity",
    title: "Increasing Complexity",
    subtitle: "Add depth with more arms and direction changes",
    difficulty: "beginner",
    outcome: "A more intricate pattern with three arms and varied spin",
    steps: [
      {
        step: 1,
        title: "Add a third arm",
        description:
          "Increase the arm count to 3. The third arm adds a new layer of detail to your shape, creating finer geometric structures.",
      },
      {
        step: 2,
        title: "Change spin direction",
        description:
          "Set one arm to spin in the opposite direction. Counter-rotating arms create patterns that fold back on themselves in beautiful ways.",
        tip: "Try making the middle arm spin in reverse — it creates loop structures.",
      },
      {
        step: 3,
        title: "Experiment with phase",
        description:
          "Shift the phase of each arm. Phase controls the starting angle, and even small changes can dramatically transform the shape's structure.",
        tip: "Phase is one of the most powerful parameters. Don't skip it.",
      },
    ],
  },
  {
    id: "layers-and-color",
    title: "Layers & Color",
    subtitle: "Build rich compositions with color and transparency",
    difficulty: "intermediate",
    outcome: "A multi-layered artwork with color and blending",
    steps: [
      {
        step: 1,
        title: "Duplicate your layer",
        description:
          "Take your current shape and duplicate the layer. Now you have two identical shapes stacked on top of each other.",
      },
      {
        step: 2,
        title: "Change the palette",
        description:
          "Assign different colors to each layer. Choose colors that complement each other — warm and cool combinations work especially well.",
        tip: "Try a vibrant color on top of a muted one for visual depth.",
      },
      {
        step: 3,
        title: "Apply blending modes",
        description:
          "Change the blend mode of the top layer. Screen, multiply, and overlay each create different interactions between the layers.",
      },
      {
        step: 4,
        title: "Adjust opacity",
        description:
          "Lower the opacity of one or both layers. Semi-transparent layers create a sense of depth and luminosity that solid colors cannot achieve.",
      },
    ],
  },
  {
    id: "motion-keyframes",
    title: "Motion & Keyframes",
    subtitle: "Bring your shapes to life with animated transitions",
    difficulty: "advanced",
    outcome: "An evolving artwork that transitions smoothly between states",
    steps: [
      {
        step: 1,
        title: "Define your first keyframe",
        description:
          "Set up a shape you like and save it as a keyframe. This is your starting state — the shape the animation begins with.",
      },
      {
        step: 2,
        title: "Create a second keyframe",
        description:
          "Change the frequency, radius, or phase values and save a second keyframe. Make the changes significant enough to see a clear transformation.",
        tip: "Changing frequency between keyframes creates the most dramatic morphing effects.",
      },
      {
        step: 3,
        title: "Preview the interpolation",
        description:
          "Play the animation. Cyclomat smoothly interpolates between your keyframes, creating organic transitions that reveal how shapes are related.",
      },
      {
        step: 4,
        title: "Add more keyframes",
        description:
          "Add additional keyframes to create longer, more complex animations. Each keyframe is a waypoint — the shape flows from one to the next.",
        tip: "Three to five keyframes is the sweet spot for mesmerizing loops.",
      },
    ],
  },
];
