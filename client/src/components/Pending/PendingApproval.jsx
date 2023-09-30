function PendingApproval() {
  return (
    <div>
      <div
        className=" mt-20 bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded relative"
        role="alert"
      >
        <span className="block sm:inline">
          Your request has been submitted. Please wait while your application is
          processed. Please contact teacher for further processing and quick
          approval.
        </span>
        <br />
        <br />
        <span className="text-primary text-text">
          <a href="/">Go back to home!!</a>
        </span>
      </div>
    </div>
  );
}

export default PendingApproval;
