import { render, screen } from "../../../helpers/test-utils";
import Project from "../Project";
import { setUserData } from "../../../hooks/user.actions";
import userFixtures from "../../../helpers/fixtures/user";
import projectFixtures from "../../../helpers/fixtures/project";

const userData = userFixtures();

const projectData = projectFixtures(true, false, userData)

beforeEach(() => {
    localStorage.clear()
    jest.clearAllMocks();
    setUserData({
        user: userData,
        access: null, 
        refresh: null
    })
})

test("render project component", () => {
    render(<Project project={projectData} />)
    const projectElement = screen.getByTestId("project-test")
    expect(projectElement).toBeInTheDocument();
})