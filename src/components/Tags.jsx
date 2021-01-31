import React from 'react';

const Tags = ({tag}) => {
    return (
        <>
          <span className="px-3 py-1 rounded-full text-sm font-semibold text-gray-700 mr-2 bg-gray-200 inline-block">
            #{tag}
          </span>
        </>
    )
}

export default Tags;
