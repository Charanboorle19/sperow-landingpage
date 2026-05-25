import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { HOME_PATH } from '../constants/routes';

const BlogBackButton = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(HOME_PATH, { state: { scrollTo: 'blog' } });
  };

  return (
    <button
      type="button"
      onClick={handleBack}
      className="group mb-8 inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200"
    >
      <ArrowLeft className="w-5 h-5 transition-transform duration-200 group-hover:-translate-x-1" />
      Back to Blogs
    </button>
  );
};

export default BlogBackButton;
