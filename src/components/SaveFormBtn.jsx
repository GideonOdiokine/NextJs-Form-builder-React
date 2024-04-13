import React from 'react'
import { FaSpinner } from 'react-icons/fa';
import { HiSaveAs } from 'react-icons/hi';
import { Button } from './ui/button';

const SaveFormBtn = () => {
  return (
    <Button
      variant={"outline"}
      className="gap-2"
    //   disabled={loading}
      onClick={() => {
        // startTransition(updateFormContent);
      }}
    >
      <HiSaveAs className="h-4 w-4" />
      Save
      {/* {loading && <FaSpinner className="animate-spin" />} */}
    </Button>
  );
}

export default SaveFormBtn
