import UpdateProject from "../UpdateProject";
import { render, screen, fireEvent } from "../../../helpers/test-utils";
import userEvent from "@testing-library/user-event";
import userFixtures from "../../../helpers/fixtures/user";
import projectFixtures from "../../../helpers/fixtures/project";
import { faker } from "@faker-js/faker";


const userData = userFixtures();
const projectData = projectFixtures(true, false, userData);

test("Render UpdateProject", async () => {
    const user = userEvent.setup();
    render(<UpdateProject project={projectData} />);

    const showModalForm = screen.getByTestId("show-modal-form");
    expect(showModalForm).toBeInTheDocument();
    fireEvent.click(showModalForm);

    const updateFormElement = screen.getByTestId("update-project-form")
    expect(updateFormElement).toBeInTheDocument();

    const projectTitleField = screen.getByTestId("project-title-field");
    expect(projectTitleField).toBeInTheDocument();

    const technologiesField = screen.getByTestId("technologies-field");
    expect(technologiesField).toBeInTheDocument();

    const projectDescriptionField = screen.getByTestId("project-description-field");
    expect(projectDescriptionField).toBeInTheDocument();

    const submitButton = screen.getByTestId("update-project-submit");
    expect(submitButton).toBeInTheDocument();

    const projectTitle = faker.lorem.sentence(5);
    await user.type(projectTitleField, projectTitle);

    const projectDescription = faker.lorem.sentence(10);
    await user.type(projectDescriptionField, projectDescription);

    const technologies = faker.lorem.sentence(10);
    await user.type(technologiesField, technologies);

    expect(projectTitle.value).toBe(projectData.title + projectTitle)
    expect(projectDescriptionField.value).toBe(projectData.description + projectDescription)
    expect(technologiesField.value).tobe(projectData.technologies + technologies)
    expect(submitButton.disabled).toBeFalsy();


})
