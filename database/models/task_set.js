﻿//!
//! Version: MIT
//!
//! Portions created by Matheus Medeiros are Copyright (c) 2017-2018
//! Matheus Medeiros. All Rights Reserved.
//!
//! Permission is hereby granted, free of charge, to any person obtaining a
//! copy of this software and associated documentation files(the "Software"),
//! to deal in the Software without restriction, including without limitation
//! the rights to use, copy, modify, merge, publish, distribute, sublicense,
//! and / or sell copies of the Software, and to permit persons to whom the
//! Software is furnished to do so, subject to the following conditions:
//!
//! The above copyright notice and this permission notice shall be included in
//! all copies or substantial portions of the Software.
//!
//! THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
//! IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//! FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.IN NO EVENT SHALL THE
//! AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//! LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//! FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
//! DEALINGS IN THE SOFTWARE.
//!

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const State = {
  EXECUTING: 0,
  FINISHED: 1,
  CANCELED: 2
}

const Priority = {
  MINIMUM: 0,
  LOW: 1,
  NORMAL: 2,
  HIGH: 3,
  URGENT: 4
}

const taskSetSchema = Schema({
  _user: {
    type: Schema.ObjectId,
    ref: 'User',
    required: true
  },
  _runnable: {
    type: Schema.ObjectId,
    ref: 'File',
    required: true
  },
  name: {
    type: String,
    required: true
  },
  argumentTemplate: {
    type: String
  },
  priority: {
    type: Number,
    default: Priority.MINIMUM
  },
  state: {
    type: Number,
    default: State.EXECUTING
  },
  startTime: {
    type: Date,
    default: Date.now
  },
  endTime: {
    type: Date
  }
})

taskSetSchema.statics.State = State
taskSetSchema.statics.Priority = Priority

module.exports = mongoose.model('TaskSet', taskSetSchema)