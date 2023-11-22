import React, { useState, useEffect } from 'react';
import { CiStar } from 'react-icons/ci';

const FeedbackForm = () => {
    const [rating, setRating] = useState(0);
    const [feedback, setFeedback] = useState('');
    const [feedbackList, setFeedbackList] = useState([]);
    const [averageRating, setAverageRating] = useState(0);

    useEffect(() => {
        const storedFeedbacks = JSON.parse(localStorage.getItem('feedbackList')) || [];
        setFeedbackList(storedFeedbacks);
        calculateAverageRating(storedFeedbacks);
    }, []);

    const calculateAverageRating = (feedbacks) => {
        const totalRating = feedbacks.reduce((sum, item) => sum + item.rating, 0);
        const average = feedbacks.length > 0 ? totalRating / feedbacks.length : 0;
        setAverageRating(average);
    };

    const handleStarClick = (clickedRating) => {
        const newRating = clickedRating === rating ? 0 : clickedRating;
        setRating(newRating);
    };

    const handleFeedbackSubmit = () => {
        if (rating === 0 || feedback === '') {
            alert('Por favor, avalie e forneça um feedback antes de enviar.');
            return;
        }

        const newFeedback = {
            id: new Date().getTime(),
            rating,
            feedback,
        };

        const updatedFeedbackList = [...feedbackList, newFeedback];
        setFeedbackList(updatedFeedbackList);

        localStorage.setItem('feedbackList', JSON.stringify(updatedFeedbackList));

        calculateAverageRating(updatedFeedbackList);

        setRating(0);
        setFeedback('');
    };

    return (
        <div className="max-w-md mx-auto mt-8 p-8 rounded-md shadow-md">
            <div className='text-2xl'>Avalie o local</div>
            <div className="flex text-3xl">
                {[1, 2, 3, 4, 5].map((value) => (
                    <CiStar
                        key={value}
                        className={value <= rating ? 'text-blue-500 cursor-pointer' : 'cursor-pointer'}
                        onClick={() => handleStarClick(value)}
                    />
                ))}
            </div>
            <div className="mt-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Motivo:</label>
                <textarea
                    rows="4"
                    className="w-full p-2 border rounded"
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                />
            </div>
            <button
                onClick={handleFeedbackSubmit}
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 text-2xl"
            >
                Enviar Feedback
            </button>

            <div className="mt-8">
                <h2 className="text-xl font-bold mb-2">Feedbacks Anteriores:</h2>
                <ul>
                    {feedbackList.map((item) => (
                        <p key={item.id}>
                            <strong>Avaliação:</strong> {item.rating} - <em>{item.feedback}</em>
                        </p>
                    ))}
                </ul>
            </div>

            <div className="mt-4">
                <strong>Média de Avaliação:</strong> {averageRating.toFixed(2)}
            </div>
        </div>
    );
};

export default FeedbackForm;
