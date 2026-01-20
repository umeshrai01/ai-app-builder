from pydantic import BaseModel, Field, ConfigDict

class File(BaseModel):
    path: str = Field(description="The path to the file to be created or modified")
    purpose: str = Field(description="The purpose of the file, e.g. 'main application logic', 'data processing', etc")

class Plan(BaseModel):  #Schema: <class '__main__.Schema'>
    name: str = Field(description="The name of the app to be built")
    description: str = Field(description="A oneline description of the app to be built, e.g. 'A web application for managing personal tasks' ")
    techstack: str = Field(description="The tech stack to be used for the app, e.g. 'python', 'javascript', 'django', 'flask', 'react', etc")
    features: list[str] = Field(description="A list of features that app should have, e.g. 'user authentication', 'data visualisation'")
    files: list[File] = Field(description="A list of files to be created, each with a 'path' and 'purpose' ")

class ImplementationTask (BaseModel):
    filepath: str = Field(description="The path to the file to be modified")
    task_description: str = Field(description="A detailed description of the task to be performed on need of the user")

class TaskPlan (BaseModel):
    implementation_steps: list[ImplementationTask] = Field(description="A list of steps to be taken")
    model_config = ConfigDict(extra="allow")

class CoderState(BaseModel):
    task_plan: TaskPlan
    current_step_idx: int = 0
