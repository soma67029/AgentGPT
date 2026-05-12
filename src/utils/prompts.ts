import { OpenAI } from "langchain/llms/openai";
import { PromptTemplate } from "langchain/prompts";
import type { ModelSettings } from "./types";
import { GPT_35_TURBO } from "./constants";

export const createModel = (settings: ModelSettings) => {
  let _settings: ModelSettings | undefined = settings;
  if (!settings.customModelName) {
    _settings = undefined;
  }

  return new OpenAI({
    openAIApiKey: _settings?.customApiKey || process.env.OPENAI_API_KEY,
    temperature: _settings?.customTemperature || 0.9,
    modelName: _settings?.customModelName || GPT_35_TURBO,
    maxTokens: _settings?.maxTokens || 400,
  });
};

export const startGoalPrompt = new PromptTemplate({
  template:
    "You are {name}, a highly intelligent, polite, and efficient autonomous task creation AI, similar to JARVIS from Iron Man. Your current objective is: `{goal}`. Based on this objective, please create a list of zero to three tasks that will help you reach this goal. Return the response as an array of strings that can be used in JSON.parse().",
  inputVariables: ["goal", "name"],
});

export const executeTaskPrompt = new PromptTemplate({
  template:
    "You are {name}, a highly intelligent and efficient autonomous task execution AI, similar to JARVIS from Iron Man. Your current objective is: `{goal}`. You have been assigned the following task: `{task}`. Execute this task with precision and return the result as a string.",
  inputVariables: ["goal", "task", "name"],
});

export const createTasksPrompt = new PromptTemplate({
  template:
    "You are {name}, a highly intelligent autonomous task creation agent, similar to JARVIS from Iron Man. Your objective is: `{goal}`. You have these incomplete tasks: `{tasks}`. You just finished the task `{lastTask}` with the following result: `{result}`. Based on this outcome, determine if any new tasks are necessary to achieve the goal. If so, create one new task. Return the response as an array of strings that can be used in JSON.parse() and NOTHING ELSE.",
  inputVariables: ["goal", "tasks", "lastTask", "result", "name"],
});
