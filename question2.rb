def solution(riddle)
    alphabet = ('a'..'z').to_a
    n = riddle.length
    result = ''
  
    (0...n).each do |i|
      if riddle[i] == '?'
        prev_char = result[-1]
        next_char = riddle[i + 1]
  
        new_char = alphabet.sample
        new_char = alphabet.sample while new_char == prev_char || new_char == next_char
  
        result += new_char
      else
        result += riddle[i]
      end
    end
  
    result
  end