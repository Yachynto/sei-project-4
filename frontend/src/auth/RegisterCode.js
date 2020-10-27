{/* <Box component="span" m={1}>
          <form autoComplete="off" onSubmit={this.handleSubmit}>
            <FormControl variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">First Name</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type='text'
                name="firstName"
                value={firstName}
                onChange={this.handleChange()}
                labelWidth={70}
              />
            </FormControl>
            <FormControl variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">Last Name</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type='text'
                name="lastName"
                value={lastName}
                onChange={this.handleChange('lastName')}
                labelWidth={70}
              />
            </FormControl>
            <FormControl variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">Username</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type='text'
                name="username"
                value={username}
                onChange={this.handleChange('username')}
                labelWidth={70}
              />
            </FormControl>
            <br/>
            <FormControl variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">Email</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type='text'
                name="email"
                value={email}
                onChange={this.handleChange('email')}
                labelWidth={70}
              />
            </FormControl>
            <FormControl variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={password}
                onChange={this.handleChange('password')}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={this.handleClickShowPassword}
                      edge="end"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                labelWidth={70}
              />
            </FormControl>
            <FormControl variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
                name="passwordConfirmation"
                value={passwordConfirmation}
                onChange={this.handleChange('passwordConfirmation')}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={this.handleClickShowPassword}
                      edge="end"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                labelWidth={70}
              />
            </FormControl>
          </form>
        </Box>
        <input
          accept="image/*"
          style={{ display: 'none' }}
          id="raised-button-file"
          multiple
          name="image"
          type="file"
          onChange={this.handleImageChange}
          value={image}
        />
        <label htmlFor="raised-button-file">
          <Button variant="raised" component="span">
      Choose an Avatar
          </Button>
        </label>
        <Button variant="contained" color="secondary" type="submit">Submit</Button>
      </> */}