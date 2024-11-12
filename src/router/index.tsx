import { createBrowserRouter } from 'react-router-dom'
import Index from '../pages/index'
import QuestionOne from '../pages/questionOne'
import QuestionTwo from '../pages/questionTwo'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Index />,
    },
    {
      path: 'question_one',
      element: <QuestionOne />,
    },
    {
      path: 'question_two',
      element: <QuestionTwo />,
    },
  ],
  {
    future: {
      v7_partialHydration: true,
    },
  }
)

export default router
