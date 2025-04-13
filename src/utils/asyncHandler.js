const asyncHandler = (requestHandler) => {      // Higher Order Function
    (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
    }
}

export { asyncHandler }