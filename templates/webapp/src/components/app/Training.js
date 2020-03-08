import React, { Component } from "react"
import { Section, Button, panel } from "mvp-webapp"
import { Route } from "react-router-dom"
import { css, jsx } from "@emotion/core"
/** @jsx jsx */
import { importAll } from "../../utils"
import Questions from "./QuestionsAndComments"

const videos = importAll(require.context('../../videos'))

const content = [
    {
        title: 'Python',
        id: 'python',
        notebook: 'https://github.com/AI-Core/Python/blob/master/intro_to_python.ipynb'
    },
    {
        title: 'Basic optimisation and linear regression',
        id: 'basic',
        notebook: 'https://github.com/AI-Core/Strong-ML-Foundations/blob/master/Linear%20regression%2C%20loss%20functions%2C%20basic%20optimisation.ipynb',
        solutions: 'https://github.com/AI-Core/Strong-ML-Foundations/blob/master/Linear%20regression%2C%20loss%20functions%2C%20basic%20optimisation%20solutions.ipynb'
    },
    {
        title: 'Intro to PyTorch',
        id: 'pytorch',
        notebook: 'https://github.com/AI-Core/Neural-Networks/blob/master/Intro%20to%20PyTorch.ipynb',
        solutions: 'https://github.com/AI-Core/Neural-Networks/blob/master/Intro%20to%20PyTorch%20Solutions.ipynb'
    },
    {
        title: 'Classification',
        id: 'classification',
        notebook: 'https://github.com/AI-Core/Strong-ML-Foundations/blob/master/Classification.ipynb',
        solutions: 'https://github.com/AI-Core/Strong-ML-Foundations/blob/master/Classification-Solutions.ipynb'
    },
    {
        title: 'Neural Networks',
        id: 'neural-networks',
        notebook: 'https://github.com/AI-Core/Neural-Networks/blob/master/Neural%20Networks.ipynb'
    },
    {
        title: 'Convolutional Neural Networks',
        caption: 'An intro to CNNs for image classification',
        id: 'cnns',
        notebook: 'https://github.com/AI-Core/Convolutional-Neural-Networks/blob/master/Convolutional%20Neural%20Networks.ipynb',
        solutions: 'https://github.com/AI-Core/Convolutional-Neural-Networks/blob/master/Convolutional%20Neural%20Networks%20Solutions.ipynb',
        feedback: 'https://docs.google.com/forms/d/e/1FAIpQLSfQ1LevMPaubXyWDLc1EEnxT5jtHf6ue00ioVL4fxbDRYYrvg/viewform?usp=sf_link'
    },
    {
        title: 'Making your own datasets',
        caption: 'Learn to build your own datasets so you can solve your own problems',
        id: 'datasets',
        notebook: 'https://github.com/AI-Core/Convolutional-Neural-Networks/blob/master/Custom%20Datasets.ipynb',
        solutions: 'https://github.com/AI-Core/Convolutional-Neural-Networks/blob/master/Custom%20Datasets%20Solutions.ipynb'
    },
    {
        title: 'Object detection with CNNs',
        caption: 'Predict bounding boxes for single instances in an image',
        id: 'detection',
        notebook: 'https://github.com/AI-Core/Convolutional-Neural-Networks/blob/master/CNN%20Detection.ipynb',
        solutions: 'https://github.com/AI-Core/Convolutional-Neural-Networks/blob/master/CNN%20Detection%20Solutions.ipynb'
    },
    {
        title: 'Recurrent Neural Networks',
        caption: 'An intro to RNNs for language modelling',
        id: 'rnns',
        notebook: '',
        solutions: '',
        feedback: 'https://docs.google.com/forms/d/e/1FAIpQLScwGl3Y5EAtjKhtGfXaqoiHNsYGY8ASKVKjqCdE9aOxd6WARg/viewform?usp=sf_link'
    },
]

export const TrainingRoutes = () => {return (
    content.map((c)=>{return(
        <Route path={`/app/training/${c.id}`} render={() => {return <Lesson {...c} />}}/>
    )})
)}

const Training = (props) => {
    return (
        content.map((s, idx)=>{return (
            <Section {...s} to={`training/${s.id}`} idx={idx} />
        )})
    )
}

export default Training

const style = css`
    font-family: var(--font1);
    
    .body {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        .questions {
            flex: 1;
            width: 100vw;
            max-width: 900px;
        }
        > div {
            margin: 10px;
        }
        .panel {
            flex: 1;
        }
        .body-panel {
            width: 100vw;
            flex: 1;
            min-width: 300px;
        }
        .video {
            min-width: 300px;
            max-width: 1100px;
            video {
                max-height: 500px;
                width: 100%;
                height: 80%;
                margin: 0;
            }
            .panel {

                padding: 0;
            }
        }
        .btns {
            flex-direction: row;
            flex-wrap: wrap;
            padding: 0;
            // max-width: 200px;
        }
    }

    .title {
        font-size: 40px;
        font-weight: 1000;  
    }
    
    .btns {
        display: flex;
        > * {
            margin: 10px;
        }
    }
`

const Lesson = (props) => {return (
    <div css={style}>
        <div className="title">
            {props.title}
        </div>
        <div className="body">
            <div css={panel} className="body-panel video">
                <video controls src={videos[`${props.id}.mp4`]}/> 
                <div css={css`${panel}; max-width: 100%;`} className="btns">
                    <Button text='Link to code' onClick={()=>{window.open(props.notebook)}}/>
                    <Button text='Link to solutions' onClick={()=>{window.open(props.solutions)}}/>
                    <Button text='Feedback' onClick={()=>{window.open(props.feedback)}}/>
                    {/* <Button text='Next steps' onClick={()=>{window.open(props.notebook_link)}}/> */}
                </div>
            </div>
            <div className="body-panel" css={panel}>
                <Questions id={props.id}/>
            </div>
        </div>
    </div>
)}
