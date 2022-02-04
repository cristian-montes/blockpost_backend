const express = require("express");
const app = require('../index');
const request = require('supertest');

  it(' return a succes object',  async () => {
    const res = await request(app).get('/api/posts/tech');
    expect( res.body.posts[0] ) .toEqual({
      author: expect.any(String),
      authorId: expect.any(Number),
    id: expect.any(Number),
    likes: expect.any(Number),
    popularity: expect.any(Number),
    reads: expect.any(Number),
    tags: expect.arrayContaining([expect.any(String)])
    });
  });