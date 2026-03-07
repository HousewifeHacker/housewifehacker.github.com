---
created_at: '2026-03-07T09:03:53.820391'
modified_at: '2026-03-07T12:46:31.023301'
published: true
title: A Tiny LLM Harness
---

I recently built a small project called LLM Evaluation Harness as an experiment. It wasn’t meant to be a production-ready evaluation framework. My goal was to understand the kinds of problems that real evaluation systems have to solve while also gaining some familiarity with AI LLM packages. What I found is that evaluating LLM outputs is much harder than it first appears. [The repo](https://github.com/HousewifeHacker/LLM-evaluation-harness)


### The Naive Approach: Simple Text Matching

Imagine testing a model with a question like:

```What is the capital of France?```

You might expect the answer:

```Paris```

A simple evaluator could look for "Paris" as the answer:

```python
if response == "Paris":
    score = 1
else:
    score = 0
```

But LLMs don’t usually respond like that. They respond more like a conversation with sentences and explanations:

```The capital of France is Paris.```

Or:

```Paris is the capital city of France.```

Or:

```France’s capital is Paris, which is also its largest city.```

The next thought was trying to make the evaluator more flexible:

```python
if "paris" in response.lower():
    score = 1
```

But even that leaves a lot of room for error. What if the response started telling you things you didn't ask for like when the best of time of year would be to travel to Paris or discussing several cities in France? What if the question had been more complicated requiring an explanation or multiple parts? This is the same problem faced by real evaluation frameworks. Writing a perfect evaluator often becomes as hard as the original problem.

### The Realization: Humans Are Good Judges

At that point I realized that humans can evaluate these responses almost instantly. Humans don't need strict rules like computers. We can easily look at a sentence and recognize if it’s correct. This is why many modern evaluation systems use human grading. Companies like Mercor, Alignerr, DataAnnotation, and Outlier AI (and several others) are newly part of the gig economy, training humans to train AI models. So I wrote a CLI for a human to input a simple pass or fail evaluation when presented with the rubric: the question, the expected answer, and the LLM response.

### The Next Problem: LLM Evaluators Are Expensive

I originally started the repository using the OpenAI Python SDK, but I quickly found myself looking for options that didn’t require payment. Then I discovered that Google offers limited access to models through Gemini using the Google Gen AI SDK, which allowed me to experiment without incurring API costs. Even after solving the problem of getting responses from the models, another issue became the computing cost of running LLMs. There’s the time it takes for the model to generate responses, and there’s the broader cost of the compute resources required to run them. If every evaluation depended on generating responses in real time, the process would quickly become slow and expensive.

To address this, I designed the evaluation harness to be segmented. Evaluation questions are first provided as CSV files, which allows the system to quickly loop through a potentially large dataset and store the results in a SQL database. The CSV ingestion acts as a simple ETL step: questions are extracted from the file, transformed by generating model responses, and then loaded into the database. This approach separates response generation from evaluation. The CSV pipeline can be rerun whenever new responses need to be added, while human judges can review responses directly from the database without waiting for models to run. When used correctly, this makes the evaluation process much faster and keeps expensive model calls out of the process of a human reviewer.