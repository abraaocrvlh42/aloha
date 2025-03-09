import supertest from 'supertest';

describe('beach forecast functional tests', () => {
  it ('Should return a forecast with just a few times', async () => {
    const { body, status } = await supertest(app).get('/forecast');
    expect(status).toBe(200);
    expect(body).toBe([{

    }])
  });
});