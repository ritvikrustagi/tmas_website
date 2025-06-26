'use client'

import React from 'react'
import Image from 'next/image'
import { Play } from 'lucide-react'
import { useTheme } from '@/contexts/ThemeContext'

interface YouTubeVideoSectionProps {
  bookId: number
  bookTitle: string
}

export default function YouTubeVideoSection({ bookId, bookTitle }: YouTubeVideoSectionProps) {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  // Course overview data for all subjects
  const courseOverview = {
    1: { // Calculus AB
      title: "AP Calculus AB Course Overview",
      units: [
        {
          unit: "Unit 1",
          title: "Limits and Continuity",
          weightage: "10-12%",
          topics: [
            "What is a limit?",
            "Approximating limits with tables, graphs, or functions",
            "Does a limit exist at a point?",
            "Properties of Limits",
            "Squeeze Theorem",
            "Types of Discontinuity",
            "Limits at Infinity",
            "Intermediate Value Theorem"
          ],
          examInfo: "You are very unlikely to see a problem from this unit on the free response section. However, expect around 5-8 multiple choice questions on this topic. They will be relatively straight forward compared to other questions."
        },
        {
          unit: "Unit 2",
          title: "Differentiation: Definition and Fundamental Properties",
          weightage: "10-12%",
          topics: [
            "Average rate of change",
            "Instantaneous rate of change",
            "What is a derivative?",
            "Limit definition of a derivative",
            "Continuity and differentiability relationship",
            "Power Rule",
            "Derivative rules: addition and subtraction",
            "More derivative rules",
            "Derivative of Trigonometric Functions"
          ],
          examInfo: "Despite the low weightage of this unit, it's fundamentals that must be known to differentiate for harder problems from other units. This unit is a key pillar to be able to differentiate throughout the entire course."
        },
        {
          unit: "Unit 3",
          title: "Differentiation: Composite, Implicit, and Inverse Functions",
          weightage: "9-13%",
          topics: [
            "Product and Quotient Rule",
            "Chain Rule",
            "Implicit differentiation",
            "Differentiating inverse functions",
            "Differentiating inverse trigonometric functions",
            "Differentiating higher order derivatives"
          ],
          examInfo: "There is always one application of the chain rule on the free response section. Pay close attention to the chain rule and differentiating inverse trigonometric functions."
        },
        {
          unit: "Unit 4",
          title: "Contextual Applications of Differentiation",
          weightage: "10-15%",
          topics: [
            "Interpreting derivatives",
            "Relating calculus to motion",
            "Related rates",
            "Approximating a value for a function using local linearity",
            "L'Hopital's Rule"
          ],
          examInfo: "Pay close attention to related rates. There will almost always be one multiple choice question and one part from a free response question that uses L'Hopital's Rule."
        },
        {
          unit: "Unit 5",
          title: "Analytical Applications of Differentiation",
          weightage: "15-18%",
          topics: [
            "Mean Value Theorem",
            "Intermediate Value Theorem",
            "Extreme Value Theorem",
            "Critical points",
            "Relative extrema",
            "Determining if a function is increasing/decreasing",
            "The First Derivative Test",
            "Candidates Test",
            "Determining concavity",
            "The Second Derivative Test",
            "Optimization",
            "Behaviors of implicit relations"
          ],
          examInfo: "This unit will guaranteed show up on the free response section. There will be one problem dedicated to it. You will definitely encounter multiple problems that will ask you to find absolute extrema."
        },
        {
          unit: "Unit 6",
          title: "Integration and Accumulation of Change",
          weightage: "17-20%",
          topics: [
            "Riemann Sums",
            "Definite Integral",
            "Fundamental Theorem of Calculus",
            "Accumulation functions",
            "Properties of definite integrals",
            "Antiderivatives",
            "Indefinite Integral",
            "U-Substitution",
            "Integration with long division",
            "Integration with completing the square"
          ],
          examInfo: "This topic has a very high yield on both the free response and multiple choice sections. You will very likely see an entire free response question that incorporates topics from this unit."
        },
        {
          unit: "Unit 7",
          title: "Differential Equations",
          weightage: "6-12%",
          topics: [
            "Slope fields",
            "Draw solution curve on a slope field",
            "Solving differential equations (general and particular solutions)",
            "Separation of variables",
            "Modeling growth patterns",
            "Exponential growth/decay"
          ],
          examInfo: "There's a high chance of receiving an entire free response question that involves differential equations. Most of the times, the parts will consist of sketching a slope field and using separation of variables."
        },
        {
          unit: "Unit 8",
          title: "Applications of Integration",
          weightage: "6-9%",
          topics: [
            "Average value of a function",
            "Interpreting definite integrals",
            "Area between curves",
            "Volume of solid with known cross section: squares, rectangles, triangles, semi-circles",
            "Volume of solids of revolutions",
            "Disks and washers"
          ],
          examInfo: "This unit is on the harder side when it comes to visualization. There's a good chance of seeing a free response question for this unit. There will be at least 5 multiple choice questions."
        }
      ]
    },
    2: { // Calculus BC (same as AB since BC includes all AB content plus additional topics)
      title: "AP Calculus BC Course Overview",
      units: [
        {
          unit: "Unit 1",
          title: "Limits and Continuity",
          weightage: "10-12%",
          topics: [
            "What is a limit?",
            "Approximating limits with tables, graphs, or functions",
            "Does a limit exist at a point?",
            "Properties of Limits",
            "Squeeze Theorem",
            "Types of Discontinuity",
            "Limits at Infinity",
            "Intermediate Value Theorem"
          ],
          examInfo: "You are very unlikely to see a problem from this unit on the free response section. However, expect around 5-8 multiple choice questions on this topic. They will be relatively straight forward compared to other questions."
        },
        {
          unit: "Unit 2",
          title: "Differentiation: Definition and Fundamental Properties",
          weightage: "10-12%",
          topics: [
            "Average rate of change",
            "Instantaneous rate of change",
            "What is a derivative?",
            "Limit definition of a derivative",
            "Continuity and differentiability relationship",
            "Power Rule",
            "Derivative rules: addition and subtraction",
            "More derivative rules",
            "Derivative of Trigonometric Functions"
          ],
          examInfo: "Despite the low weightage of this unit, it's fundamentals that must be known to differentiate for harder problems from other units. This unit is a key pillar to be able to differentiate throughout the entire course."
        },
        {
          unit: "Unit 3",
          title: "Differentiation: Composite, Implicit, and Inverse Functions",
          weightage: "9-13%",
          topics: [
            "Product and Quotient Rule",
            "Chain Rule",
            "Implicit differentiation",
            "Differentiating inverse functions",
            "Differentiating inverse trigonometric functions",
            "Differentiating higher order derivatives"
          ],
          examInfo: "There is always one application of the chain rule on the free response section. Pay close attention to the chain rule and differentiating inverse trigonometric functions."
        },
        {
          unit: "Unit 4",
          title: "Contextual Applications of Differentiation",
          weightage: "10-15%",
          topics: [
            "Interpreting derivatives",
            "Relating calculus to motion",
            "Related rates",
            "Approximating a value for a function using local linearity",
            "L'Hopital's Rule"
          ],
          examInfo: "Pay close attention to related rates. There will almost always be one multiple choice question and one part from a free response question that uses L'Hopital's Rule."
        },
        {
          unit: "Unit 5",
          title: "Analytical Applications of Differentiation",
          weightage: "15-18%",
          topics: [
            "Mean Value Theorem",
            "Intermediate Value Theorem",
            "Extreme Value Theorem",
            "Critical points",
            "Relative extrema",
            "Determining if a function is increasing/decreasing",
            "The First Derivative Test",
            "Candidates Test",
            "Determining concavity",
            "The Second Derivative Test",
            "Optimization",
            "Behaviors of implicit relations"
          ],
          examInfo: "This unit will guaranteed show up on the free response section. There will be one problem dedicated to it. You will definitely encounter multiple problems that will ask you to find absolute extrema."
        },
        {
          unit: "Unit 6",
          title: "Integration and Accumulation of Change",
          weightage: "17-20%",
          topics: [
            "Riemann Sums",
            "Definite Integral",
            "Fundamental Theorem of Calculus",
            "Accumulation functions",
            "Properties of definite integrals",
            "Antiderivatives",
            "Indefinite Integral",
            "U-Substitution",
            "Integration with long division",
            "Integration with completing the square"
          ],
          examInfo: "This topic has a very high yield on both the free response and multiple choice sections. You will very likely see an entire free response question that incorporates topics from this unit."
        },
        {
          unit: "Unit 7",
          title: "Differential Equations",
          weightage: "6-12%",
          topics: [
            "Slope fields",
            "Draw solution curve on a slope field",
            "Solving differential equations (general and particular solutions)",
            "Separation of variables",
            "Modeling growth patterns",
            "Exponential growth/decay"
          ],
          examInfo: "There's a high chance of receiving an entire free response question that involves differential equations. Most of the times, the parts will consist of sketching a slope field and using separation of variables."
        },
        {
          unit: "Unit 8",
          title: "Applications of Integration",
          weightage: "6-9%",
          topics: [
            "Average value of a function",
            "Interpreting definite integrals",
            "Area between curves",
            "Volume of solid with known cross section: squares, rectangles, triangles, semi-circles",
            "Volume of solids of revolutions",
            "Disks and washers"
          ],
          examInfo: "This unit is on the harder side when it comes to visualization. There's a good chance of seeing a free response question for this unit. There will be at least 5 multiple choice questions."
        }
      ]
    },
    3: { // Physics 1
      title: "AP Physics 1 Course Overview",
      units: [
        {
          unit: "Unit 1",
          title: "Kinematics",
          weightage: "12-18%",
          topics: [
            "Motion in a straight line",
            "Motion in two dimensions",
            "Position, velocity, and acceleration",
            "Kinematic equations",
            "Graphical analysis of motion",
            "Projectile motion",
            "Relative motion"
          ],
          examInfo: "Kinematics forms the foundation for all other physics concepts. Expect multiple choice questions on graphical analysis and at least one free response question involving projectile motion."
        },
        {
          unit: "Unit 2",
          title: "Dynamics",
          weightage: "12-18%",
          topics: [
            "Newton's first law",
            "Newton's second law",
            "Newton's third law",
            "Free body diagrams",
            "Forces in equilibrium",
            "Friction",
            "Normal force",
            "Tension"
          ],
          examInfo: "Newton's laws are central to AP Physics 1. Free body diagrams will appear on both multiple choice and free response. Master the application of F=ma in various scenarios."
        },
        {
          unit: "Unit 3",
          title: "Circular Motion and Gravitation",
          weightage: "6-14%",
          topics: [
            "Uniform circular motion",
            "Centripetal acceleration",
            "Centripetal force",
            "Universal gravitation",
            "Gravitational field",
            "Orbital motion",
            "Kepler's laws"
          ],
          examInfo: "Circular motion problems often combine with other units. Understand the difference between centripetal and centrifugal forces. Gravitation problems focus on conceptual understanding."
        },
        {
          unit: "Unit 4",
          title: "Energy",
          weightage: "16-24%",
          topics: [
            "Kinetic energy",
            "Potential energy",
            "Conservation of energy",
            "Work-energy theorem",
            "Power",
            "Conservative vs non-conservative forces",
            "Energy diagrams"
          ],
          examInfo: "Energy is heavily tested on both sections. Conservation of energy problems are guaranteed on free response. Master energy diagrams and their interpretation."
        },
        {
          unit: "Unit 5",
          title: "Momentum",
          weightage: "12-18%",
          topics: [
            "Linear momentum",
            "Impulse-momentum theorem",
            "Conservation of momentum",
            "Collisions (elastic and inelastic)",
            "Center of mass",
            "Two-dimensional collisions"
          ],
          examInfo: "Momentum conservation is a major topic. Expect collision problems on free response. Understand the difference between elastic and inelastic collisions thoroughly."
        },
        {
          unit: "Unit 6",
          title: "Simple Harmonic Motion",
          weightage: "6-14%",
          topics: [
            "Period and frequency",
            "Simple pendulum",
            "Mass-spring system",
            "Energy in SHM",
            "Restoring force",
            "Amplitude and phase"
          ],
          examInfo: "SHM problems test understanding of oscillatory motion. Focus on energy transformations and the relationship between force and displacement in oscillating systems."
        },
        {
          unit: "Unit 7",
          title: "Torque and Rotational Motion",
          weightage: "10-16%",
          topics: [
            "Torque",
            "Rotational equilibrium",
            "Angular kinematics",
            "Rotational inertia",
            "Angular momentum",
            "Conservation of angular momentum"
          ],
          examInfo: "Rotational motion mirrors linear motion concepts. Torque problems will appear on free response. Understand the analogy between linear and rotational quantities."
        }
      ]
    },
    4: { // Physics C
      title: "AP Physics C: Mechanics Course Overview",
      units: [
        {
          unit: "Unit 1",
          title: "Kinematics",
          weightage: "18-24%",
          topics: [
            "Position, velocity, and acceleration vectors",
            "Calculus-based kinematics",
            "Derivatives and integrals in motion",
            "Parametric equations",
            "Projectile motion with calculus",
            "Relative motion"
          ],
          examInfo: "Physics C requires strong calculus skills. Kinematics problems will involve derivatives and integrals. Master the mathematical relationships between position, velocity, and acceleration."
        },
        {
          unit: "Unit 2",
          title: "Newton's Laws of Motion",
          weightage: "20-26%",
          topics: [
            "Newton's laws with calculus",
            "Force as a function of time/position",
            "Differential equations of motion",
            "Variable mass systems",
            "Momentum with calculus",
            "Impulse as integral of force"
          ],
          examInfo: "Newton's laws form the core of mechanics. Expect differential equation problems on free response. Variable mass problems (like rockets) are common in Physics C."
        },
        {
          unit: "Unit 3",
          title: "Work, Energy and Power",
          weightage: "14-20%",
          topics: [
            "Work as line integral",
            "Conservative and non-conservative forces",
            "Potential energy functions",
            "Force from potential energy",
            "Power as function of time",
            "Energy conservation with calculus"
          ],
          examInfo: "Energy problems in Physics C involve calculus extensively. Understanding potential energy functions and their derivatives is crucial for success on the exam."
        },
        {
          unit: "Unit 4",
          title: "Systems of Particles and Linear Momentum",
          weightage: "12-18%",
          topics: [
            "Center of mass with calculus",
            "Motion of center of mass",
            "Momentum conservation",
            "Variable mass systems",
            "Rocket equation",
            "Impulse and momentum"
          ],
          examInfo: "Systems of particles problems often involve integration. The rocket equation is a classic Physics C topic that combines variable mass with momentum conservation."
        },
        {
          unit: "Unit 5",
          title: "Rotation",
          weightage: "12-18%",
          topics: [
            "Angular kinematics with calculus",
            "Rotational inertia calculations",
            "Torque and angular momentum",
            "Conservation of angular momentum",
            "Rolling motion",
            "Parallel axis theorem"
          ],
          examInfo: "Rotational motion in Physics C requires integration for moment of inertia calculations. Rolling motion problems combine linear and rotational concepts."
        },
        {
          unit: "Unit 6",
          title: "Oscillations",
          weightage: "8-14%",
          topics: [
            "Simple harmonic motion differential equation",
            "Solutions to SHM equation",
            "Damped oscillations",
            "Driven oscillations",
            "Energy in oscillating systems",
            "Physical pendulum"
          ],
          examInfo: "Oscillations in Physics C involve differential equations. Understanding the SHM differential equation and its solutions is essential for this unit."
        }
      ]
    },
    5: { // AMC 10/12
      title: "AMC 10/12 Competition Overview",
      units: [
        {
          unit: "Strategy 1",
          title: "Problem-Solving Techniques",
          weightage: "Essential",
          topics: [
            "Working backwards",
            "Process of elimination",
            "Educated guessing",
            "Time management (75 minutes, 25 problems)",
            "When to skip problems",
            "Using answer choices effectively",
            "Checking your work efficiently"
          ],
          examInfo: "The AMC is as much about strategy as mathematical knowledge. Learn to identify which problems to attempt first and which to save for later."
        },
        {
          unit: "Strategy 2",
          title: "Key Mathematical Areas",
          weightage: "High Frequency",
          topics: [
            "Number theory and divisibility",
            "Algebra and equations",
            "Geometry and coordinate geometry",
            "Counting and probability",
            "Sequences and series",
            "Logarithms and exponents",
            "Complex numbers (AMC 12 only)"
          ],
          examInfo: "These mathematical areas appear most frequently on the AMC. Focus your study time on these core topics while maintaining familiarity with other areas."
        },
        {
          unit: "Strategy 3",
          title: "Advanced Problem Types",
          weightage: "Medium Frequency",
          topics: [
            "Functional equations",
            "Inequality problems",
            "Optimization problems",
            "Recursive sequences",
            "Modular arithmetic",
            "Graph theory basics",
            "Polynomial analysis"
          ],
          examInfo: "These topics typically appear in problems 15-25. They require deeper mathematical insight and often have elegant solutions that aren't immediately obvious."
        },
        {
          unit: "Strategy 4",
          title: "Competition Preparation",
          weightage: "Critical",
          topics: [
            "Practice with timed conditions",
            "Learn from past competitions",
            "Identify your strengths and weaknesses",
            "Master fundamental formulas",
            "Develop pattern recognition",
            "Build mathematical intuition",
            "Qualify for AIME (score 100+ or top 5%)"
          ],
          examInfo: "Consistent practice under timed conditions is crucial. Aim to solve 15-18 problems correctly to have a chance at AIME qualification."
        }
      ]
    },
    6: { // AMC Strategies (same as AMC 10/12)
      title: "AMC Key Strategies and Formulas",
      units: [
        {
          unit: "Formula 1",
          title: "Essential Formulas",
          weightage: "Must Know",
          topics: [
            "Quadratic formula and discriminant",
            "Distance and midpoint formulas",
            "Area formulas for all shapes",
            "Volume formulas for solids",
            "Pythagorean theorem and extensions",
            "Law of cosines and sines",
            "Arithmetic and geometric series"
          ],
          examInfo: "These formulas should be memorized and readily accessible. Many AMC problems can be solved quickly with the right formula."
        },
        {
          unit: "Formula 2",
          title: "Number Theory Essentials",
          weightage: "High Impact",
          topics: [
            "Divisibility rules",
            "Prime factorization",
            "GCD and LCM",
            "Modular arithmetic basics",
            "Diophantine equations",
            "Chinese remainder theorem",
            "Fermat's little theorem"
          ],
          examInfo: "Number theory problems appear frequently on the AMC. Understanding these concepts will help you solve problems that might otherwise seem impossible."
        },
        {
          unit: "Formula 3",
          title: "Counting and Probability",
          weightage: "Regular Appearance",
          topics: [
            "Permutations and combinations",
            "Inclusion-exclusion principle",
            "Probability rules",
            "Conditional probability",
            "Expected value",
            "Pigeonhole principle",
            "Stars and bars method"
          ],
          examInfo: "Counting problems often have multiple valid approaches. Learn several methods to increase your chances of finding a solution path."
        },
        {
          unit: "Formula 4",
          title: "Geometric Insights",
          weightage: "Consistent Presence",
          topics: [
            "Similar triangles",
            "Circle theorems",
            "Coordinate geometry",
            "Transformations",
            "Area relationships",
            "3D geometry basics",
            "Trigonometric identities"
          ],
          examInfo: "Geometry problems on the AMC often have elegant solutions. Look for similar triangles, use coordinate geometry when appropriate, and remember circle theorems."
        }
      ]
    },
    7: { // Biology
      title: "AP Biology Course Overview",
      units: [
        {
          unit: "Unit 1",
          title: "Chemistry of Life",
          weightage: "8-11%",
          topics: [
            "Structure of water and hydrogen bonding",
            "Elements of life",
            "Introduction to biological macromolecules",
            "Properties of carbon",
            "Carbohydrates",
            "Lipids",
            "Proteins",
            "Nucleic acids"
          ],
          examInfo: "This foundational unit sets up biochemistry concepts used throughout the course. Focus on the structure-function relationships of macromolecules."
        },
        {
          unit: "Unit 2",
          title: "Cell Structure and Function",
          weightage: "10-13%",
          topics: [
            "Cell structures and organelles",
            "Prokaryotic and eukaryotic cells",
            "Cell membrane structure",
            "Membrane permeability",
            "Passive transport",
            "Active transport",
            "Facilitated diffusion",
            "Endocytosis and exocytosis"
          ],
          examInfo: "Cell structure and transport are heavily tested. Understand how membrane structure relates to function and different types of cellular transport."
        },
        {
          unit: "Unit 3",
          title: "Cellular Energetics",
          weightage: "12-16%",
          topics: [
            "Enzyme structure and function",
            "Environmental factors affecting enzymes",
            "Cellular respiration",
            "Photosynthesis",
            "Fitness and energy coupling",
            "ATP synthesis",
            "Metabolic pathways"
          ],
          examInfo: "Energy processes are central to AP Biology. Master the details of photosynthesis and cellular respiration, including their regulation and connections."
        },
        {
          unit: "Unit 4",
          title: "Cell Communication and Cell Cycle",
          weightage: "10-15%",
          topics: [
            "Cell communication overview",
            "Signal transduction pathways",
            "Changes in signal transduction",
            "Feedback mechanisms",
            "Cell cycle and mitosis",
            "Regulation of cell cycle",
            "Cancer and cell cycle"
          ],
          examInfo: "Cell communication appears frequently on free response questions. Understand how cells respond to environmental changes through signaling pathways."
        },
        {
          unit: "Unit 5",
          title: "Heredity",
          weightage: "8-11%",
          topics: [
            "Meiosis",
            "Genetic diversity from sexual reproduction",
            "Mendelian genetics",
            "Non-Mendelian genetics",
            "Environmental effects on phenotype",
            "Chromosomal inheritance",
            "Genetic disorders"
          ],
          examInfo: "Genetics problems require careful analysis. Practice pedigree analysis and understand how meiosis contributes to genetic variation."
        },
        {
          unit: "Unit 6",
          title: "Gene Expression and Regulation",
          weightage: "12-16%",
          topics: [
            "DNA and RNA structure",
            "Replication",
            "Transcription",
            "Translation",
            "Gene regulation in prokaryotes",
            "Gene regulation in eukaryotes",
            "Mutations and biotechnology"
          ],
          examInfo: "Gene expression is a major topic on the AP exam. Understand both the processes and their regulation in prokaryotes and eukaryotes."
        },
        {
          unit: "Unit 7",
          title: "Natural Selection",
          weightage: "13-20%",
          topics: [
            "Introduction to natural selection",
            "Hardy-Weinberg equilibrium",
            "Evidence of evolution",
            "Common ancestry and phylogeny",
            "Continuing evolution",
            "Population genetics",
            "Speciation"
          ],
          examInfo: "Evolution ties together all biological concepts. Master Hardy-Weinberg calculations and understand how to analyze phylogenetic trees."
        },
        {
          unit: "Unit 8",
          title: "Ecology",
          weightage: "10-15%",
          topics: [
            "Population ecology",
            "Community ecology",
            "Ecosystem ecology",
            "Biogeochemical cycles",
            "Energy flow",
            "Population dynamics",
            "Human impact on ecosystems"
          ],
          examInfo: "Ecology problems often involve data analysis and graphing. Understand population growth models and energy flow through ecosystems."
        }
      ]
    },
    8: { // Statistics
      title: "AP Statistics Course Overview",
      units: [
        {
          unit: "Unit 1",
          title: "Exploring One-Variable Data",
          weightage: "15-23%",
          topics: [
            "Introduction to statistics",
            "Displaying quantitative data",
            "Displaying categorical data",
            "Describing distributions",
            "Summary statistics",
            "Comparing distributions",
            "Percentiles and z-scores"
          ],
          examInfo: "Data analysis forms the foundation of statistics. Focus on interpreting graphs and calculating summary statistics accurately."
        },
        {
          unit: "Unit 2",
          title: "Exploring Two-Variable Data",
          weightage: "5-12%",
          topics: [
            "Scatterplots",
            "Correlation",
            "Least squares regression",
            "Assessing fit of regression line",
            "Residual analysis",
            "Influential points",
            "Transformations for linearity"
          ],
          examInfo: "Regression analysis is crucial for AP Statistics. Understand how to interpret correlation and regression output, including residual analysis."
        },
        {
          unit: "Unit 3",
          title: "Collecting Data",
          weightage: "12-15%",
          topics: [
            "Planning studies",
            "Sampling methods",
            "Experiments vs observational studies",
            "Random sampling",
            "Sources of bias",
            "Experimental design",
            "Completely randomized designs"
          ],
          examInfo: "Study design is heavily tested on free response. Understand the difference between experiments and observational studies, and identify sources of bias."
        },
        {
          unit: "Unit 4",
          title: "Probability, Random Variables, and Probability Distributions",
          weightage: "10-20%",
          topics: [
            "Introduction to probability",
            "Conditional probability",
            "Independent events",
            "Random variables",
            "Binomial distribution",
            "Geometric distribution",
            "Normal distribution"
          ],
          examInfo: "Probability concepts underlie statistical inference. Master the properties of binomial, geometric, and normal distributions."
        },
        {
          unit: "Unit 5",
          title: "Sampling Distributions",
          weightage: "7-12%",
          topics: [
            "Sampling distribution of sample mean",
            "Sampling distribution of sample proportion",
            "Central Limit Theorem",
            "Bias and variability",
            "Sampling distribution properties",
            "Standard error"
          ],
          examInfo: "The Central Limit Theorem is fundamental to statistical inference. Understand when and how it applies to different statistics."
        },
        {
          unit: "Unit 6",
          title: "Inference for Categorical Data: Proportions",
          weightage: "12-15%",
          topics: [
            "Confidence intervals for proportions",
            "Hypothesis tests for proportions",
            "Type I and Type II errors",
            "Significance levels and P-values",
            "Comparing two proportions",
            "Chi-square tests"
          ],
          examInfo: "Inference for proportions is a major topic. Master the conditions for inference and proper interpretation of confidence intervals and P-values."
        },
        {
          unit: "Unit 7",
          title: "Inference for Quantitative Data: Means",
          weightage: "12-18%",
          topics: [
            "T-distribution",
            "Confidence intervals for means",
            "Hypothesis tests for means",
            "Comparing two means",
            "Paired data",
            "Pooled vs separate variance procedures"
          ],
          examInfo: "T-procedures are extensively tested. Understand when to use one-sample, two-sample, and paired procedures for means."
        },
        {
          unit: "Unit 8",
          title: "Inference for Categorical Data: Chi-Square",
          weightage: "2-8%",
          topics: [
            "Chi-square goodness of fit",
            "Chi-square test of independence",
            "Chi-square test of homogeneity",
            "Expected counts",
            "Degrees of freedom",
            "Conditions for chi-square tests"
          ],
          examInfo: "Chi-square tests analyze categorical data relationships. Understand the differences between goodness of fit, independence, and homogeneity tests."
        },
        {
          unit: "Unit 9",
          title: "Inference for Quantitative Data: Slopes",
          weightage: "2-8%",
          topics: [
            "Inference for slope of regression line",
            "Confidence intervals for slope",
            "Hypothesis tests for slope",
            "Conditions for inference about slope",
            "Transformation and inference"
          ],
          examInfo: "Regression inference connects Units 2 and 7. Focus on the conditions required for valid inference about the population slope."
        }
      ]
    },
    9: { // Chemistry
      title: "AP Chemistry Course Overview",
      units: [
        {
          unit: "Unit 1",
          title: "Atomic Structure and Properties",
          weightage: "7-9%",
          topics: [
            "Moles and molar mass",
            "Mass spectroscopy",
            "Elemental composition",
            "Mixtures and pure substances",
            "Atomic structure",
            "Electron configuration",
            "Photoelectron spectroscopy"
          ],
          examInfo: "Atomic structure forms the foundation for understanding chemical behavior. Master electron configurations and their relationship to periodic trends."
        },
        {
          unit: "Unit 2",
          title: "Molecular and Ionic Compound Structure and Properties",
          weightage: "7-9%",
          topics: [
            "Chemical bonds",
            "Intramolecular forces",
            "Intermolecular forces",
            "Properties of ionic solids",
            "Properties of metals",
            "Lewis diagrams",
            "Resonance and formal charge"
          ],
          examInfo: "Understanding bonding is crucial for predicting molecular properties. Focus on the relationship between structure and properties."
        },
        {
          unit: "Unit 3",
          title: "Intermolecular Forces and Properties",
          weightage: "18-22%",
          topics: [
            "Intermolecular forces",
            "Properties of solids",
            "Solids, liquids, and gases",
            "Ideal gas law",
            "Kinetic molecular theory",
            "Deviation from ideal behavior",
            "Solutions and mixtures"
          ],
          examInfo: "This is the highest-weighted unit. Master gas laws, intermolecular forces, and their effects on physical properties."
        },
        {
          unit: "Unit 4",
          title: "Chemical Reactions",
          weightage: "7-9%",
          topics: [
            "Introduction to reactions",
            "Net ionic equations",
            "Representations of reactions",
            "Physical and chemical changes",
            "Stoichiometry",
            "Introduction to titrations",
            "Types of chemical reactions"
          ],
          examInfo: "Chemical reactions are central to chemistry. Practice writing balanced equations and performing stoichiometric calculations."
        },
        {
          unit: "Unit 5",
          title: "Kinetics",
          weightage: "7-9%",
          topics: [
            "Reaction rates",
            "Introduction to rate law",
            "Concentration changes over time",
            "Elementary reactions",
            "Collision model",
            "Reaction mechanisms",
            "Catalysis"
          ],
          examInfo: "Kinetics problems often involve data analysis. Understand how to determine rate laws from experimental data and analyze mechanisms."
        },
        {
          unit: "Unit 6",
          title: "Thermodynamics",
          weightage: "7-9%",
          topics: [
            "Endothermic and exothermic processes",
            "Energy diagrams",
            "Heat transfer and thermal equilibrium",
            "Heat capacity and calorimetry",
            "Enthalpy of formation",
            "Bond enthalpy",
            "Enthalpy of fusion and vaporization"
          ],
          examInfo: "Thermodynamics connects energy and chemical change. Master calorimetry calculations and Hess's law applications."
        },
        {
          unit: "Unit 7",
          title: "Equilibrium",
          weightage: "7-9%",
          topics: [
            "Introduction to equilibrium",
            "Direction of reversible reactions",
            "Reaction quotient and equilibrium constant",
            "Calculating equilibrium concentrations",
            "Representing equilibrium",
            "Le Châtelier's principle",
            "Introduction to solubility equilibria"
          ],
          examInfo: "Equilibrium is fundamental to understanding chemical systems. Practice ICE tables and Le Châtelier's principle applications."
        },
        {
          unit: "Unit 8",
          title: "Acids and Bases",
          weightage: "11-15%",
          topics: [
            "Introduction to acids and bases",
            "pH and pOH",
            "Strong acids and bases",
            "Weak acids and bases",
            "Acid-base reactions",
            "pH and pKa",
            "Acid-base titrations",
            "Molecular structure and acidity"
          ],
          examInfo: "Acid-base chemistry is heavily tested. Master pH calculations, titration curves, and buffer systems."
        },
        {
          unit: "Unit 9",
          title: "Applications of Thermodynamics",
          weightage: "7-9%",
          topics: [
            "Introduction to entropy",
            "Absolute entropy and entropy change",
            "Gibbs free energy",
            "Thermodynamic favorability",
            "Coupled reactions",
            "Galvanic cells",
            "Electrolytic cells"
          ],
          examInfo: "Advanced thermodynamics connects energy and spontaneity. Understand the relationship between enthalpy, entropy, and free energy."
        }
      ]
    },
    10: { // Computer Science
      title: "AP Computer Science Principles Course Overview",
      units: [
        {
          unit: "Unit 1",
          title: "Digital Information",
          weightage: "11-13%",
          topics: [
            "Creative development",
            "Digital representation of data",
            "Binary number system",
            "Data compression",
            "Extracting information from data",
            "Using programs with data",
            "Privacy and security concerns"
          ],
          examInfo: "Understanding data representation is fundamental. Focus on how different types of information are stored and manipulated digitally."
        },
        {
          unit: "Unit 2",
          title: "The Internet",
          weightage: "13-18%",
          topics: [
            "Internet and computing systems",
            "Fault-tolerant systems",
            "Parallel and distributed computing",
            "Internet protocols",
            "World Wide Web",
            "Internet security",
            "Digital divide"
          ],
          examInfo: "Internet concepts are heavily tested. Understand how the internet works, including protocols, security, and societal impacts."
        },
        {
          unit: "Unit 3",
          title: "Algorithms and Programming",
          weightage: "17-22%",
          topics: [
            "Variables and assignments",
            "Data abstraction",
            "Mathematical expressions",
            "Strings",
            "Boolean expressions",
            "Conditionals",
            "Iteration",
            "Developing programs"
          ],
          examInfo: "Programming fundamentals are essential. Practice writing pseudocode and understand how basic programming constructs work."
        },
        {
          unit: "Unit 4",
          title: "Computer Systems and Networks",
          weightage: "11-15%",
          topics: [
            "Hardware and software",
            "Path between devices",
            "Bandwidth and latency",
            "Computer network protocols",
            "Scalability of systems",
            "Cloud computing",
            "Computing innovations"
          ],
          examInfo: "Systems concepts connect hardware and software. Understand how computer systems work together and scale to meet demands."
        },
        {
          unit: "Unit 5",
          title: "Data and Analysis",
          weightage: "17-22%",
          topics: [
            "Lists",
            "Binary search",
            "Data processing",
            "Extracting information from data",
            "Using programs with data",
            "Insight and knowledge",
            "Machine learning and data mining"
          ],
          examInfo: "Data analysis is increasingly important in computer science. Focus on how programs can process and extract insights from data."
        },
        {
          unit: "Unit 6",
          title: "Algorithms",
          weightage: "17-22%",
          topics: [
            "Algorithmic thinking",
            "Mathematical expressions",
            "Strings and lists",
            "Procedures",
            "Libraries",
            "Calling procedures",
            "Developing procedures",
            "Algorithmic efficiency"
          ],
          examInfo: "Algorithm design and analysis are core CS concepts. Understand how to evaluate efficiency and design effective algorithms."
        },
        {
          unit: "Unit 7",
          title: "Global Impact",
          weightage: "11-13%",
          topics: [
            "Beneficial and harmful effects",
            "Digital divide",
            "Computing bias",
            "Crowdsourcing",
            "Legal and ethical concerns",
            "Safe computing",
            "Privacy and security"
          ],
          examInfo: "Computing's global impact covers social and ethical issues. Understand both positive and negative effects of computing innovations."
        }
      ]
    }
  }

  // YouTube video data for each book topic
  const videoData = {
    1: { // Calculus AB
      playlistTitle: "AP Calculus AB Complete Course",
      videos: [
        {
          id: "Q5Qw0f0b-fY",
          title: "Unit 1 - Limits and Continuity",
          description: "Rapid review of limits and continuity."
        },
        {
          id: "8D3Cti6yvno",
          title: "Unit 2 - Differentiation",
          description: "Rapid review of differentiation."
        },
        {
          id: "-h_xboUuhRs",
          title: "Unit 3 - Differentiating Composite, Implicit, Inverse Functions",
          description: "More advanced differentiation rapid review."
        },
        {
          id: "Hotyap6U-eM",
          title: "Unit 4 - Contextual Applications of Differentiation",
          description: "Explore the applications of differentiation in your exams."
        },
        {
          id: "W-0k_Ojc9-I",
          title: "Unit 5 - Analytical Applications of Differentiation",
          description: "Rapid review of the analytical applications of differentiation in your exams."
        },
        {
          id: "TGvikSm7xcc",
          title: "Unit 6 - Integration and Accumulation of Change",
          description: "Rapid review of integration in calculus."
        },
        {
          id: "MqZtlD5Hn5U",
          title: "Unit 6 Part 2 - Integration and Accumulation of Change",
          description: "Master complex integration techniques."
        },
        {
          id: "VnUHUUcV4xg",
          title: "Unit 7 - Differential Equations",
          description: "Rapid review of various differential equations."
        },
        {
          id: "5_dAgZgGBFI",
          title: "Unit 8 - Applications of Integration",
          description: "Final review of the applications of integration."
        }
      ]
    },
    2: { // Calculus BC
      playlistTitle: "AP Calculus BC Advanced Topics",
      videos: [
        {
          id: "Q5Qw0f0b-fY",
          title: "Unit 1 - Limits and Continuity",
          description: "Rapid review of limits and continuity."
        },
        {
          id: "8D3Cti6yvno",
          title: "Unit 2 - Differentiation",
          description: "Rapid review of differentiation."
        },
        {
          id: "-h_xboUuhRs",
          title: "Unit 3 - Differentiating Composite, Implicit, Inverse Functions",
          description: "More advanced differentiation rapid review."
        },
        {
          id: "Hotyap6U-eM",
          title: "Unit 4 - Contextual Applications of Differentiation",
          description: "Explore the applications of differentiation in your exams."
        },
        {
          id: "W-0k_Ojc9-I",
          title: "Unit 5 - Analytical Applications of Differentiation",
          description: "Rapid review of the analytical applications of differentiation in your exams."
        },
        {
          id: "TGvikSm7xcc",
          title: "Unit 6 - Integration and Accumulation of Change",
          description: "Rapid review of integration in calculus."
        },
        {
          id: "MqZtlD5Hn5U",
          title: "Unit 6 Part 2 - Integration and Accumulation of Change",
          description: "Master complex integration techniques."
        },
        {
          id: "VnUHUUcV4xg",
          title: "Unit 7 - Differential Equations",
          description: "Rapid review of various differential equations."
        },
        {
          id: "5_dAgZgGBFI",
          title: "Unit 8 - Applications of Integration",
          description: "Final review of the applications of integration."
        }
      ]
    },
    3: { // Physics 1
      playlistTitle: "AP Physics 1 Complete Course",
      videos: [
        {
          id: "9p09eUXsvXk",
          title: "Unit 1 - Kinematics and Motion",
          description: "Rapid review of kinematics."
        },
        {
          id: "hU7ryUNLmIU",
          title: "Unit 2 - Dynamics",
          description: "Master dynamics in physics."
        },
        {
          id: "2tYLNerdiSU",
          title: "Unit 3 - Circular Motion and Gravitation",
          description: "Understand gravity and orbits."
        },
        {
          id: "vLt8BIZckoY",
          title: "Unit 4 - Energy",
          description: "Understand the core fundamentals of energy."
        },
        {
          id: "MDeOszPo0fE",
          title: "Unit 5 - Momentum",
          description: "Understand the core fundamentals of momentum."
        },
        {
          id: "Hqyz5Wm596o",
          title: "Unit 6 - Simple Harmonic Motion",
          description: "Dive deeper into harmonic motion and its applications."
        },
        {
          id: "U3wPltH4WlQ",
          title: "Unit 7 - Torque and Rotational Motion",
          description: "Dive deeper into torque and rotational motion."
        }
      ]
    },
    4: { // Physics C
      playlistTitle: "AP Physics C Mechanics",
      videos: [
        {
          id: "k7HiFkMKYoU",
          title: "Unit 1 - Kinematics",
          description: "Calculus-based mechanics including kinematics and advanced dynamics."
        },
        {
          id: "7HNG9TAv0bA",
          title: "Unit 2 - Newton's Laws of Motion",
          description: "Look at Newton's fundamental laws and do calculations."
        },
        {
          id: "KH1GgKJu1mI",
          title: "Unit 3 - Work, Energy and Power",
          description: "Look into the role these forces play.."
        }
      ]
    },
    5: { // AMC 10/12
      playlistTitle: "AMC 10/12 Problem Solving",
      videos: [
        {
          id: "T1h_V6XAkqE",
          title: "Master the AMC 10/12 Part 1",
          description: "Essential strategies and problem-solving techniques for AMC competitions."
        },
        {
          id: "AuJC-jNMrDA",
          title: "Master the AMC 10/12 Part 2",
          description: "Advanced mathematical techniques and competition problem solving."
        }
      ]
    },
    6: { // AMC Strategies
      playlistTitle: "AMC Key Strategies and Formulas",
      videos: [
        {
          id: "T1h_V6XAkqE",
          title: "Master the AMC 10/12 Part 1",
          description: "Essential formulas, time management, and strategic approaches to AMC problems."
        },
        {
          id: "AuJC-jNMrDA",
          title: "Master the AMC 10/12 Part 2",
          description: "Learn to recognize common AMC problem types and solution methods."
        }
      ]
    },
    7: { // Biology
      playlistTitle: "AP Biology Complete Review",
      videos: [
        {
          id: "dQw4w9WgXcQ",
          title: "AP Biology - Coming Soon",
          duration: "0:00",
          views: "0",
          description: "Video content for AP Biology is being prepared and will be available soon."
        }
      ]
    },
    8: { // Statistics
      playlistTitle: "AP Statistics Complete Course",
      videos: [
        {
          id: "dQw4w9WgXcQ",
          title: "AP Statistics - Coming Soon",
          duration: "0:00",
          views: "0",
          description: "Video content for AP Statistics is being prepared and will be available soon."
        }
      ]
    },
    9: { // Chemistry
      playlistTitle: "AP Chemistry Complete Review",
      videos: [
        {
          id: "dQw4w9WgXcQ",
          title: "AP Chemistry - Coming Soon",
          duration: "0:00",
          views: "0",
          description: "Video content for AP Chemistry is being prepared and will be available soon."
        }
      ]
    },
    10: { // Computer Science
      playlistTitle: "AP Computer Science Principles",
      videos: [
        {
          id: "dQw4w9WgXcQ",
          title: "AP Computer Science - Coming Soon",
          duration: "0:00",
          views: "0",
          description: "Video content for AP Computer Science is being prepared and will be available soon."
        }
      ]
    }
  }

  const currentVideoData = videoData[bookId as keyof typeof videoData] || {
    playlistTitle: `${bookTitle} Video Series`,
    videos: [
      {
        id: "dQw4w9WgXcQ",
        title: "Coming Soon - Video Series",
        duration: "0:00",
        views: "0",
        description: "Video content for this topic is being prepared and will be available soon."
      }
    ]
  }

  // Get course overview data if available
  const currentCourseOverview = courseOverview[bookId as keyof typeof courseOverview]

  return (
    <div className="mt-12 space-y-8">
      {/* Course Overview Table for Calculus AB and BC */}
      {currentCourseOverview && (
        <div 
          className="glass-effect rounded-2xl border border-gray-200/50 shadow-2xl p-8"
          style={{
            backgroundColor: isDark ? '#1f2937' : '#ffffff',
            borderColor: isDark ? '#4b5563' : '#e5e7eb'
          }}
        >
          <h2 
            className="text-2xl font-bold mb-6"
            style={{ color: isDark ? '#ffffff' : '#1f2937' }}
          >
            {currentCourseOverview.title}
          </h2>
          
          {/* Mobile-Friendly Card Layout */}
          <div className="space-y-6">
            {currentCourseOverview.units.map((unit, index) => (
              <div
                key={index}
                className="border rounded-xl p-6 transition-all duration-300 hover:shadow-lg"
                style={{
                  backgroundColor: isDark ? '#374151' : '#f9fafb',
                  borderColor: isDark ? '#4b5563' : '#e5e7eb'
                }}
              >
                {/* Unit Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <div className="flex items-center gap-3 mb-2 sm:mb-0">
                    <span 
                      className="px-3 py-1 rounded-full text-sm font-semibold"
                      style={{ 
                        backgroundColor: isDark ? '#60a5fa' : '#2563eb',
                        color: '#ffffff'
                      }}
                    >
                      {unit.unit}
                    </span>
                    <h3 
                      className="text-lg font-semibold"
                      style={{ color: isDark ? '#ffffff' : '#1f2937' }}
                    >
                      {unit.title}
                    </h3>
                  </div>
                  <div 
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold"
                    style={{ 
                      backgroundColor: isDark ? '#fbbf24' : '#d97706',
                      color: '#ffffff'
                    }}
                  >
                    {unit.weightage} Exam Weight
                  </div>
                </div>

                {/* Topics Section */}
                <div className="mb-4">
                  <h4 
                    className="text-sm font-semibold mb-3"
                    style={{ color: isDark ? '#d1d5db' : '#6b7280' }}
                  >
                    Key Topics:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {unit.topics.map((topic, topicIndex) => (
                      <div
                        key={topicIndex}
                        className="flex items-start gap-2"
                      >
                        <div 
                          className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                          style={{ backgroundColor: isDark ? '#60a5fa' : '#2563eb' }}
                        />
                        <span 
                          className="text-sm"
                          style={{ color: isDark ? '#d1d5db' : '#6b7280' }}
                        >
                          {topic}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Exam Strategy */}
                <div 
                  className="p-4 rounded-lg border-l-4"
                  style={{
                    backgroundColor: isDark ? '#1e3a8a' : '#dbeafe',
                    borderLeftColor: isDark ? '#60a5fa' : '#2563eb'
                  }}
                >
                  <h4 
                    className="text-sm font-semibold mb-2"
                    style={{ color: isDark ? '#dbeafe' : '#1e40af' }}
                  >
                    💡 Exam Strategy:
                  </h4>
                  <p 
                    className="text-sm"
                    style={{ color: isDark ? '#dbeafe' : '#1e40af' }}
                  >
                    {unit.examInfo}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div 
            className="mt-6 p-4 border rounded-lg"
            style={{
              backgroundColor: isDark ? '#065f46' : '#d1fae5',
              borderColor: isDark ? '#10b981' : '#6ee7b7'
            }}
          >
            <p 
              className="text-sm text-center"
              style={{ color: isDark ? '#d1fae5' : '#065f46' }}
            >
              📚 <strong>Study Strategy:</strong> Focus extra attention on higher-weightage units (15%+) as they&apos;re more likely to appear on the exam. 
              Use this overview to plan your study schedule and identify areas that need more practice.
            </p>
          </div>
        </div>
      )}

      {/* Video Section */}
      <div 
        className="glass-effect rounded-2xl border border-gray-200/50 shadow-2xl p-8"
        style={{
          backgroundColor: isDark ? '#1f2937' : '#ffffff',
          borderColor: isDark ? '#4b5563' : '#e5e7eb'
        }}
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
            <Play className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 
              className="text-2xl font-bold"
              style={{ color: isDark ? '#ffffff' : '#1f2937' }}
            >
              Video Lectures
            </h2>
            <p 
              className="text-sm"
              style={{ color: isDark ? '#d1d5db' : '#6b7280' }}
            >
              {currentVideoData.playlistTitle}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentVideoData.videos.map((video, index) => (
            <div
              key={index}
              className="group cursor-pointer transition-all duration-300 hover:scale-105"
              onClick={() => window.open(`https://www.youtube.com/watch?v=${video.id}`, '_blank')}
            >
              <div 
                className="border rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                style={{
                  backgroundColor: isDark ? '#374151' : '#f9fafb',
                  borderColor: isDark ? '#4b5563' : '#e5e7eb'
                }}
              >
                {/* Video Thumbnail */}
                <div className="relative aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                  <Image
                    src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                    alt={video.title}
                    fill
                    className="object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <div className="hidden absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                    <Play className="w-16 h-16 text-white opacity-80" />
                  </div>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center opacity-90 group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                  </div>
                </div>

                {/* Video Info */}
                <div className="p-4">
                  <h3 
                    className="font-semibold mb-2 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2"
                    style={{ color: isDark ? '#ffffff' : '#1f2937' }}
                  >
                    {video.title}
                  </h3>
                  <p 
                    className="text-sm mb-3 line-clamp-2"
                    style={{ color: isDark ? '#d1d5db' : '#6b7280' }}
                  >
                    {video.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div 
          className="mt-8 p-4 border rounded-lg"
          style={{
            backgroundColor: isDark ? '#1e3a8a' : '#dbeafe',
            borderColor: isDark ? '#3b82f6' : '#93c5fd'
          }}
        >
          <p 
            className="text-sm text-center"
            style={{ color: isDark ? '#dbeafe' : '#1e40af' }}
          >
            💡 <strong>Pro Tip:</strong> Watch these videos alongside the book for the best learning experience. 
            Each video corresponds to specific chapters and provides visual explanations of key concepts.
          </p>
        </div>
      </div>
    </div>
  )
}
