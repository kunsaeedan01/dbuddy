import { render, screen, fireEvent } from "../../../helpers/test-utils";
import userEvent from "@testing-library/user-event";
import CreateProject from '../CreateProject'
import { faker } from "@faker-js/faker";
import {act} from "react-dom/test-utils"


test("Renders CreateProject component", 
    async() => {
        const user = userEvent.setup();

        render(<CreateProject />);

        const showModalForm = screen.getByTestId("show-modal-form");
        expect(showModalForm).toBeInTheDocument();

        fireEvent.click(showModalForm);

        const createFormElement = screen.getByTestId("create-project-form");
        expect(createFormElement).toBeInTheDocument();

        const projectTitleField = screen.getByTestId("project-title-field");
        expect(projectTitleField).toBeInTheDocument();

        const technologiesField = screen.getByTestId("technologies-field");
        expect(technologiesField).toBeInTheDocument();

        const projectDescriptionField = screen.getByTestId("project-description-field");
        expect(projectDescriptionField).toBeInTheDocument();

        const submitButton = screen.getByTestId("create-project-submit");
        expect(submitButton).toBeInTheDocument();

        expect(submitButton.disabled).toBeTruthy();

        const projectTitle = faker.lorem.sentence(5);
        user.type(projectTitleField, projectTitle);

        const projectDescription = faker.lorem.sentence(10);
        user.type(projectDescriptionField, projectDescription);

        const technologies = faker.lorem.sentence(10);
        user.type(technologiesField, technologies);

        expect(projectTitleField.value).toBe(projectTitle);
        expect(projectDescriptionField.value).toBe(projectDescription);
        expect(technologiesField.value).toBe(technologies);
        expect(submitButton.disabled).toBeFalsy();

    

});

